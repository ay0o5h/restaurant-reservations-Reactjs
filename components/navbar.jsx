import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/images/logo2.svg";
import Link from "next/link";
import { Avatar, Button, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const Navbar = () => {
  const [token, setToken] = useState();
  const Router = useRouter();
  useEffect(() => {
    const user = Cookies.get("user");
    if (user) setToken(JSON.parse(user));
  }, []);
  const handleLogout = async () => {
    await Cookies.remove("token");
    await Cookies.remove("user");
    Router.reload();
  };
  const content = (
    <div>
      <Button onClick={handleLogout} type="primary" danger>
        Logout
      </Button>
    </div>
  );
  return (
    <>
      <nav>
        <div className="container">
          <div className="logoDiv">
            <Image className="logo" src={logo} width="40px" height="40px" />
            <h1>reservtable</h1>
          </div>
          {!token ? (
            <Link href="/login">
              <a className="btn">login</a>
            </Link>
          ) : (
            <Popover trigger="click" placement="bottom" content={content}>
              <Avatar
                style={{ cursor: "pointer" }}
                size="large"
                icon={<UserOutlined />}
              />
            </Popover>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
