import AuthLayout from '~/app/(auth)/layout';
import { SignUpForm } from '~/components/(auth)/signup/sign-up-form';

export default function SignUpPage() {
  return (
    <AuthLayout
      title="회원가입"
      description="경기대학교 AI컴퓨터공학부"
      footerDescription="이미 계정이 있으신가요?"
      footerLink="로그인"
      footerHref="/signin"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
