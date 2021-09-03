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
       
                {/* <svg version="1.1" baseProfile="full"  width="500" height="500" > */}
                {restaurant?.map((rest) => (
                  <div key={rest.id}>
                    {rest.name}
                    </div>
    ))}
                        {/* <circle cx="150" cy="50" r="20" fill="green" onClick={handleRect} ></circle>

               <circle cx="256" cy="100" r="20" fill="red"></circle>


                 </svg> */}
              
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