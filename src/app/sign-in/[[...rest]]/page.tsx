import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center pt-24 max-sm:p-5 ">
      <SignIn />
    </div>
  );
}
