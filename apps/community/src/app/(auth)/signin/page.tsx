import { AuthLayout } from '~/widgets/auth/components/auth-layout';

import SignInForm from '~/features/auth/components/sign-in-form';

export default function SignInPage() {
  return (
    <AuthLayout
      title='로그인'
      description='경기대학교 AI컴퓨터공학부'
      info='계정이 없으신가요?'
      link='회원가입'
      href='/signup'
    >
      <SignInForm />
    </AuthLayout>
  );
}
