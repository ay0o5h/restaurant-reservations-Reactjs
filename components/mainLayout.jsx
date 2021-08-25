import { useState, useEffect } from "react";
import Restaurants from '../components/restaurants'
import Footer from '../components/footer'
import Image from 'next/image'
import logo from '../public/images/logo2.svg'
import cover from '../public/images/cover.svg';
import Link from "next/link";
import { Avatar,Button ,Popover} from 'antd';
import { UserOutlined ,ArrowRightOutlined} from '@ant-design/icons';
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const MainLayout =() => {
  const [token, setToken] = useState();
  const Router = useRouter();
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
       <Image className="logo" src={logo}  width="40px" height="40px"/> 
      <h1>reservtable</h1>
       </div> 
       {
            !token
              ?
        (<Link href="/login"><a className="btn"  >login</a></Link>):
       ( <Popover
        trigger="click"
        placement="bottom"
        content={content}
      >
        <Avatar style={{cursor:"pointer"}}size="large" icon={<UserOutlined />} />
      </Popover>)}
   </div>
 </nav>
 <div className="main">
 <div className="left">
     <h1>Book Your Table Now</h1>
     <p>Get restaurant table reservations Better online than keep a busy phone line</p> 
     {
 !token
   ?
     (<Link href="/signup"><a className="btn"> Get Started <ArrowRightOutlined style={{ fontSize: '16px'}} /> </a></Link>
    ) :null}</div>
 <div className="right">
 <Image className="cover" src={cover}  /> 
 </div>
</div>
 <Restaurants/>
      <Footer/>
</>
    )
}
export default MainLayout