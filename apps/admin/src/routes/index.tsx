import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { createFileRoute } from '@tanstack/react-router'
import { Button, Card, Form, Input, Typography } from 'antd'
import { useSignIn } from '~/hooks/use-sign-in'

export const Route = createFileRoute('/')({
  component: SignInPage,
})

interface FormValues {
  userId: string
  password: string
}

function SignInPage() {
  const [form] = Form.useForm()
  const signInMutation = useSignIn()

  const onFinish = (values: FormValues) => {
    signInMutation.mutate(values, {
      onError: (error) => {
        console.error('로그인 실패:', error)
      },
    })
  }

  const removeSpace = (fieldName: keyof FormValues) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/\s/g, '')
      form.setFieldsValue({ [fieldName]: newValue })
    }
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      <Card className="shadow-lg w-96">
        <Typography.Title level={3} className="text-center">
          로그인
        </Typography.Title>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ userId: '', password: '' }}
        >
          <Form.Item
            label="아이디"
            name="userId"
            rules={[{ required: true, message: '아이디를 입력하세요!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="아이디 입력"
              onChange={removeSpace('userId')}
            />
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

          {signInMutation.isError && (
            <p className="text-red-500 text-center">
              아이디 또는 비밀번호를 확인하세요.
            </p>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              로그인
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default SignInPage
