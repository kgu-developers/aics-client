import { AuthLayout } from '~/widgets/auth/components/auth-layout';

import SignUpForm from '~/features/auth/components/sign-up-form';

export default function SignUpPage() {
  return (
    <AuthLayout
      title='회원가입'
      description='경기대학교 AI컴퓨터공학부'
      info='이미 계정이 있으신가요?'
      link='로그인'
      href='/signin'
    >
      <SignUpForm />
    </AuthLayout>
  );
}
