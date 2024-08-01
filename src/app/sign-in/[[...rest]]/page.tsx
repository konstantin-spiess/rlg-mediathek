import { AppHeader } from '@/components/app-header';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <div className="flex flex-1 justify-center pt-24">
        <SignIn />
      </div>
    </div>
  );
}
