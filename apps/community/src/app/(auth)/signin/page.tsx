import { AuthFooter } from '~/components/(auth)/auth-footer';
import { AuthHeader } from '~/components/(auth)/auth-header';
import { SignInForm } from '~/components/(auth)/signin/sign-in-form';

export default function SignInPage() {
  return (
    <>
      <AuthHeader title="로그인" description="경기대학교 AI컴퓨터공학부" />
      <SignInForm />
      <AuthFooter
        description="계정이 없으신가요?"
        link="회원가입"
        href="/signup"
      />
    </>
  );
}
