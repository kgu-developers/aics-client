import { createFileRoute } from '@tanstack/react-router';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Typography } from 'antd';

export const Route = createFileRoute('/auth/sign-in')({
  component: SignInPage,
});

interface FormValues {
  ID: string;
  password: string;
}

function SignInPage() {
  
  const onFinish = (values: FormValues) => {
    console.log('로그인 정보:', values);
  };

  const [form] = Form.useForm(); 
  
  const removeSpace = (fieldName: "id" | "password") => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/\s/g, "");
      form.setFieldsValue({ [fieldName]: newValue });
    };
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <Typography.Title level={3} className="text-center">
          로그인
        </Typography.Title>
        <Form
          form={form}               
          name="login"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ id: '', password: '' }}
        >
          <Form.Item
            label="아이디"
            name="id"
            rules={[{ required: true, message: '아이디를 입력하세요!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="아이디 입력" onChange={removeSpace('id')}/>
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: '비밀번호를 입력하세요!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="비밀번호 입력"
              onChange={removeSpace('password')}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              로그인
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
