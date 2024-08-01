import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex justify-center pt-24 max-sm:p-5">
      <SignUp />
    </div>
  );
}
