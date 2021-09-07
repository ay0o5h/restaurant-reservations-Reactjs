import { DatePicker, Space,Form,Avatar, Button, Popover,InputNumber} from 'antd';
const { RangePicker } = DatePicker;
import Image from 'next/image'
import cover from '../public/images/3.png';
import logo from '../public/images/logo2.svg'
import Link from "next/link";
import {ArrowRightOutlined,UserOutlined} from '@ant-design/icons';
import Cookies from "js-cookie";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import {ApiRestaurant} from '../api'
const Test=()=>{
  const Router = useRouter();
  const [tables, setTables] = useState();
  const [token, setToken] = useState();
  const [restaurant, setRestaurant] = useState();
  const { id } = Router.query;
   
    

  
    useEffect(() => {
      ApiRestaurant((data, error) => { 
        console.log(data)
        if (error) return message.error(error);
        setRestaurant(data);
        console.log(restaurant)
      });
      const user = Cookies.get("user");
      if (user) setToken(JSON.parse(user));
    }, []);
    const handleLogout = async () => {
        await Cookies.remove("token");
        await Cookies.remove("user");
        Router.reload();
      };
      const handleRect =  () => {
        console.log("hello")
      };

    const content = (
        <div>
          <Button onClick={handleLogout} type="primary" danger>
            Logout
          </Button>
        </div>
      );
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = () => {
    console.log('Failed:');
  };
  
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}
function onChangeNum(value) {
    console.log('changed', value);
  }
    return(
        <>
     <nav>
        <div className="container">
          <div className="logoDiv">
            <Image className="logo" src={logo} width="40px" height="40px" />
            <h1>reservtable</h1>
          </div>
          {
            !token
              ?
              (<Link href="/login"><a className="btn"  >login</a></Link>) :
              (<Popover
                trigger="click"
                placement="bottom"
                content={content}
              >
                <Avatar style={{ cursor: "pointer" }} size="large" icon={<UserOutlined />} />
              </Popover>)}
        </div>
      </nav>
        <div className="singleRestaurant">
       
                <div className="left"  >
                  {/* restaurant  one */}
                  {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/vB12QPG/1.png"   x="0" y="0" height="500px" width="500px"/>
                <circle cx="105" cy="115" r="15" fill="green"></circle>
                <circle cx="105" cy="205" r="15" fill="green"></circle> 
                <circle cx="105" cy="275" r="15" fill="green"></circle>
                <circle cx="109" cy="375" r="15" fill="green"></circle> 
                <circle cx="203" cy="115" r="15" fill="green"></circle>
                <circle cx="203" cy="205" r="15" fill="green"></circle> 
                <circle cx="203" cy="275" r="15" fill="green"></circle>
                <circle cx="207" cy="375" r="15" fill="green"></circle> 
                <circle cx="300" cy="115" r="15" fill="green"></circle>
                <circle cx="300" cy="205" r="15" fill="green"></circle> 
                <circle cx="300" cy="275" r="15" fill="green"></circle>
                <circle cx="300" cy="375" r="15" fill="green"></circle> 
                <circle cx="430" cy="207" r="15" fill="green"></circle> 
                <circle cx="430" cy="279" r="15" fill="green"></circle>
                 </svg>        */}
                    {/* restaurant  Two */}
                  {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/XYP7SMB/2.png"   x="0" y="0" height="500px" width="500px"/>
                <circle cx="85" cy="210" r="15" fill="green"></circle> 
                <circle cx="85" cy="310" r="15" fill="green"></circle>
                <circle cx="202" cy="147" r="15" fill="green"></circle> 
                <circle cx="204" cy="227" r="15" fill="green"></circle> 
                <circle cx="203" cy="308" r="15" fill="green"></circle> 
                <circle cx="202" cy="407" r="15" fill="green"></circle> 
                <circle cx="320" cy="147" r="15" fill="green"></circle> 
                <circle cx="320" cy="227" r="15" fill="green"></circle> 
                <circle cx="320" cy="308" r="15" fill="green"></circle> 
                <circle cx="318" cy="407" r="15" fill="green"></circle>
                <circle cx="415" cy="147" r="15" fill="green"></circle> 
                <circle cx="415" cy="227" r="15" fill="green"></circle> 
                <circle cx="415" cy="308" r="15" fill="green"></circle>
                 </svg>        */}
                  {/* restaurant  Three */}
                  {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/nQnGRYs/3.png"   x="0" y="0" height="500px" width="500px"/>
             <circle cx="140" cy="119" r="15" fill="green"></circle> 
                <circle cx="140" cy="217" r="15" fill="green"></circle> 
                <circle cx="140" cy="311" r="15" fill="green"></circle> 
                <circle cx="140" cy="408" r="15" fill="green"></circle> 
                <circle cx="250" cy="119" r="15" fill="green"></circle> 
                <circle cx="250" cy="217" r="15" fill="green"></circle> 
                <circle cx="250" cy="311" r="15" fill="green"></circle> 
                <circle cx="250" cy="408" r="15" fill="green"></circle> 
                <circle cx="348" cy="119" r="15" fill="green"></circle> 
                <circle cx="353" cy="217" r="15" fill="green"></circle> 
                <circle cx="353" cy="311" r="15" fill="green"></circle> 
                <circle cx="359" cy="410" r="15" fill="green"></circle> 
                 </svg>        */}
                    {/* restaurant  Four */}
                  <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/mtmmFFL/4.png"   x="0" y="0" height="500px" width="500px"/>
                <circle cx="100" cy="121" r="15" fill="green"></circle> 
                <circle cx="97" cy="216" r="15" fill="green"></circle> 
                <circle cx="185" cy="121" r="15" fill="green"></circle> 
                <circle cx="185" cy="215" r="15" fill="green"></circle> 
                <circle cx="187" cy="308" r="15" fill="green"></circle> 
                <circle cx="276" cy="120" r="15" fill="green"></circle> 
                <circle cx="275" cy="215" r="15" fill="green"></circle> 
                <circle cx="270" cy="308" r="15" fill="green"></circle> 
                <circle cx="270" cy="400" r="15" fill="green"></circle> 
                <circle cx="385" cy="120" r="15" fill="green"></circle> 
                <circle cx="385" cy="215" r="15" fill="green"></circle> 
                <circle cx="385" cy="308" r="15" fill="green"></circle> 
                <circle cx="385" cy="400" r="15" fill="green"></circle> 
                 </svg>       

        {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/mtmmFFL/4.png"   x="0" y="0" height="500px" width="500px"/>
               <circle cx="50" cy="60" r="10" fill="red" onClick={handleRect} ></circle>
                <circle cx="140" cy="60" r="10" fill="green"></circle>
                <circle cx="50" cy="150" r="10" fill="green"></circle>
                <circle cx="140" cy="150" r="10" fill="green"></circle>
                <circle cx="100" cy="100" r="10" fill="green"></circle>
                <circle cx="50" cy="210" r="10" fill="green" ></circle>
                <circle cx="140" cy="210" r="10" fill="green"></circle>
                <circle cx="100" cy="180" r="10" fill="green"></circle>
                <circle cx="50" cy="270" r="10" fill="green"></circle>
                <circle cx="140" cy="270" r="10" fill="green"></circle>
                <circle cx="100" cy="240" r="10" fill="green"></circle>
                 </svg>        */}

              
                 {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/fSQs9pY/restaurant-3.png"   x="0" y="0" height="400px" width="400px"/>
               <circle cx="100" cy="60" r="10" fill="red" onClick={handleRect} ></circle>
               <circle cx="100" cy="120" r="10" fill="green"></circle>
               <circle cx="100" cy="180" r="10" fill="green"></circle>
                <circle cx="100" cy="300" r="10" fill="green"></circle>
                <circle cx="100" cy="240" r="10" fill="green"></circle>
               <circle cx="180" cy="60" r="10" fill="green"></circle>
               <circle cx="180" cy="120" r="10" fill="green"></circle>
               <circle cx="180" cy="180" r="10" fill="green"></circle>
                <circle cx="180" cy="300" r="10" fill="green"></circle>
                <circle cx="180" cy="240" r="10" fill="green"></circle>
               <circle cx="270" cy="60" r="10" fill="green"></circle>
               <circle cx="270" cy="120" r="10" fill="green"></circle>
               <circle cx="270" cy="180" r="10" fill="green"></circle>
                <circle cx="270" cy="300" r="10" fill="green"></circle>
                <circle cx="270" cy="240" r="10" fill="green"></circle>
               <circle cx="360" cy="60" r="10" fill="green"></circle>
               <circle cx="360" cy="120" r="10" fill="green"></circle>
               <circle cx="360" cy="180" r="10" fill="green"></circle>
                <circle cx="360" cy="300" r="10" fill="green"></circle>
                <circle cx="360" cy="240" r="10" fill="green"></circle>
                 </svg>      */}
                  {/* <svg version="1.1" baseProfile="full"  width="500" height="500" >
             <image href="https://i.ibb.co/25p9g6T/restaurant-2.png"   x="0" y="0" height="400px" width="400px"/>
               <circle cx="180" cy="60" r="10" fill="green"></circle>
               <circle cx="270" cy="60" r="10" fill="green"></circle>
               <circle cx="360" cy="60" r="10" fill="green"></circle>
               <circle cx="180" cy="120" r="10" fill="green"></circle>
               <circle cx="270" cy="120" r="10" fill="green"></circle>
               <circle cx="360" cy="120" r="10" fill="green"></circle>
               <circle cx="180" cy="180" r="10" fill="green"></circle>
               <circle cx="270" cy="180" r="10" fill="green"></circle>
               <circle cx="360" cy="180" r="10" fill="green"></circle>
               <circle cx="40" cy="300" r="10" fill="green"></circle>
             <circle cx="100" cy="300" r="10" fill="green"></circle>
             <circle cx="270" cy="300" r="10" fill="green"></circle>
             <circle cx="180" cy="300" r="10" fill="green"></circle>
             <circle cx="360" cy="300" r="10" fill="green"></circle>
                 </svg>   */}
              </div> 
        
            
       
     
         <div className="right">
           <Form
     className="form"
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
          <Form.Item
     
        name="date"
        rules={[
          {
            required: true,
            message: 'Please select a date',
          },
        ]}
     >
   
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
      className="picker"
    />
 
      </Form.Item>
      <Form.Item
     
     name="numOfPeoplr"
     rules={[
       {
         required: true,
         message: 'Please select a number',
       },
     ]}
  >


<InputNumber className="picker-num" min={1} max={100} defaultValue={2} onChange={onChangeNum} />

   </Form.Item>
       <Form.Item >
        <Button type="primary" htmlType="submit">
        Book now
        </Button>
      </Form.Item>
    </Form>
        </div>
       
        </div>
        </>
    )
}
export default Test;