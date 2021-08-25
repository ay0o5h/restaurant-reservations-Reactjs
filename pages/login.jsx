import { useState } from "react";
import Image from 'next/image'
import cover from '../public/images/login.svg';
import {ArrowRightOutlined} from '@ant-design/icons'
import { Form, Input, Button,message } from 'antd';
import Link from "next/link";
import { ApiLogin } from "../api";
import { useRouter } from "next/router";
const Login =() => {
  const Router = useRouter();

  const [loading, setLoading] = useState(false);
    const onFinish = () => {
      ApiLogin(info, (data, error) => {
        setLoading(false);
        if (error) return message.error("Invalid credentials");
        Cookies.set("token", data.token);
        Cookies.set("user", JSON.stringify(data.user));
        Router.push("/");
      });
        };
    return (
        <div className="login">
              <div className="left">
                <h1>Login</h1>
		
        <Form

initialValues={{
remember: true,
}}

name="register"
onFinish={onFinish}
className="form"
scrollToFirstError
>
  <Form.Item
    name="phone"
   
    rules={[
  
      {
        required: true,
        message: 'Please input your phone!',
      },
    ]}
  >
    <Input placeholder="07805847657" className="input" />
  </Form.Item>

  <Form.Item
    name="password"

    rules={[
      {
        required: true,
        message: 'Please input your password!',
      },
    ]}
    hasFeedback
  >
    <Input.Password      placeholder="********" className="password" />
  </Form.Item>
 
  <Form.Item >
    <Button    
       loading={loading}
       disabled={loading}
    type="primary"  
    htmlType="submit"
    >
     <ArrowRightOutlined style={{fontWeight:900}}/>
    </Button>
  </Form.Item>
  </Form>
  <p>you don't have an account ? <Link  href="/signup">singup</Link></p> 

                </div>
            <div className="right">
            <Image className="cover" src={cover}  /> 
            </div>
        </div>
    )
}
export default Login