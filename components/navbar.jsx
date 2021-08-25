import { useState, useEffect } from "react";import Image from 'next/image'
import logo from '../public/images/logo2.svg'
import Link from "next/link";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const Navbar =() => {
  const [token, setToken] = useState();
  const Router = useRouter();
  const handleLogout = async () => {
    await Cookies.remove("token");
    await Cookies.remove("user");
    Router.reload();
  };
    return (
        <nav>
        <div className="container">
        <div className="logoDiv">
       <Image className="logo" src={logo}  width="40px" height="40px"/> 
      <h1>reservtable</h1>
       </div> 
        <Link href="/login"><a className="btn"  >login</a></Link>
   </div>
 </nav>
    )
}
export default Navbar