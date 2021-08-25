import { useState } from "react";
import Image from 'next/image'
import cover from '../public/images/login.svg';
import {ArrowRightOutlined} from '@ant-design/icons'
import { Form, Input, Button,message } from 'antd';
import { ApiOtp, ApiRegister } from "../api";
import { useRouter } from "next/router";
import Link from "next/link";
const Signup =() => {
  const Router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secondStep, setSecondStep] = useState(false);
  const [otp, setOtp] = useState("");
    const onFinish = (e) => {
      ApiRegister(e, (data, error) => {
        if (error) return alert(error);
        Cookies.set("registerToken", data.token);
        setSecondStep(true);
      });
   };
        const handleOtp = (e) => {
          e.preventDefault();
          ApiOtp({ otp }, (data, error) => {
            console.log(data);
            if (error) return alert(error);
            Cookies.set("user", JSON.stringify(data.user));
            Router.push("/");
          });
        };
    return (
        <div className="login">
              <div className="left">
                <h1>Sign up</h1>
                {!secondStep ? (
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
    name="name"
   
    rules={[
  
      {
        required: true,
        message: 'Please input your name!',
      },
    ]}
  >
    <Input placeholder="Aya munadhil" className="input" />
  </Form.Item>

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
    <Button    type="primary" htmlType="submit">
     <ArrowRightOutlined style={{fontWeight:900}}/>
    </Button>
  </Form.Item>
  </Form>):(
     <form onSubmit={handleOtp}>
     <p className="label">enter your code</p>
     <input
       required
       type="text"
       placeholder="1234"
       value={otp}
       onChange={(e) => setOtp(e.target.value)}
     />
     <button type="submit">  <ArrowRightOutlined style={{fontWeight:900}}/></button>
   </form>
  )}
  <p>already have an account ? <Link href="/login">Login</Link></p> 

                </div>
            <div className="right">
            <Image className="cover" src={cover}  /> 
            </div>
        </div>
    )
}
export default Signup