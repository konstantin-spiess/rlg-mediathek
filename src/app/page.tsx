import { AppHeader } from '@/components/app-header';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect, RedirectType } from 'next/navigation';

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-up', RedirectType.replace);
  }
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex flex-1 flex-col items-center justify-center gap-4 p-24">
        <p className="text-center">Wilkommen in der RLG Mediathek.</p>
        <div className="flex flex-col gap-4">
          <Image src="/rlg_logo.webp" alt="RLG Logo" width={200} height={200} className="dark:invert" />
        </div>
      </main>
    </div>
  );
}
