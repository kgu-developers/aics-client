import AuthLayout from '~/app/(auth)/layout';
import { SignInForm } from '~/components/(auth)/signin/sign-in-form';

export default function SignInPage() {
  return (
    <AuthLayout
      title="로그인"
      description="경기대학교 AI컴퓨터공학부"
      footerDescription="계정이 없으신가요?"
      footerLink="회원가입"
      footerHref="/signup"
    >
      <SignInForm />
    </AuthLayout>
  );
}
