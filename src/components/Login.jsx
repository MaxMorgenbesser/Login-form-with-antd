import { Form, Input, Button } from "antd";
const Login = () => {
    const HandleForm = ({email,password})=>{
alert('form submitted with '+ email+' and '+password)
    }
  return (
    <h2>
      Login
      <Form onFinish={HandleForm}>
        <Form.Item label="Email" name="email" type="primary" htmlType="submit" rules={[{
            required:true,
            message:'Please enter a valid email address'  }]}>
          <Input />
        </Form.Item >
        <Form.Item label="Password" name="password" type="primary" htmlType="submit" rules={[{
            required:true,
            message:'Please enter a valid password'  }]}>
          <Input.Password />
        </Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </h2>
  );
};

export default Login;
