import { AppHeader } from '@/components/app-header';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <div className="flex flex-1 justify-center pt-24">
        <SignUp />
      </div>
    </div>
  );
}
