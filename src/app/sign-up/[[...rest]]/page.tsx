import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex justify-center pt-24">
      <SignUp />
    </div>
  );
}
