import { DatePicker, Space,Form,Button } from 'antd';
const { RangePicker } = DatePicker;
import Image from 'next/image'
import cover from '../public/images/3.png';
import Navbar from '../components/navbar';
import {ArrowRightOutlined} from '@ant-design/icons'
const SingleRestaurant=()=>{
     const onFinish = (values) => {
    console.log('Success:', values);
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}
    return(
        <>
        <Navbar/>
        <div className="singleRestaurant">
     
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
       <Form.Item >
        <Button type="primary" htmlType="submit">
         <ArrowRightOutlined style={{padding:20,fontSize:16,color:"white"}}/>
        </Button>
      </Form.Item>
    </Form>
        </div>
        <div className="left">
          <Image className="cover" src={cover}  /> 
        </div>
        </div>
        </>
    )
}
export default SingleRestaurant;