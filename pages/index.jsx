import Head from "next/head";
import { useState, useEffect } from "react";
import Restaurants from "../components/restaurants";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import Image from "next/image";
import cover from "../public/images/cover.svg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Home() {
  const [token, setToken] = useState();
  useEffect(() => {
    const user = Cookies.get("user");
    if (user) setToken(JSON.parse(user));
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div className="main">
        <div className="left">
          <h1>Book Your Table Now</h1>
          <p>
            Get restaurant table reservations Better online than keep a busy
            phone line
          </p>
          {!token ? (
            <Link href="/signup">
              <a className="btn">
                {" "}
                Get Started <ArrowRightOutlined
                  style={{ fontSize: "16px" }}
                />{" "}
              </a>
            </Link>
          ) : null}
        </div>
        <div className="right">
          <Image className="cover" src={cover} />
        </div>
      </div>
      {token ? (
        <>
          <Restaurants />
          <Footer />
        </>
      ) : null}
    </>
  );
}
