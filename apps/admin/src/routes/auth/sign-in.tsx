import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/sign-in')({
  component: SignInPage,
});

function SignInPage() {
  return <div>
    <div>
      <div className='bg-blue-600'>테일윈드 적용 테스트</div>
    </div>
  </div>;
}