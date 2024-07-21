import { AppHeader } from '@/components/organisms/AppHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <AppHeader />
      <main className="flex min-h-screen flex-col items-center  justify-center gap-4 p-24">
        <p className="text-center">Wilkommen in der RLG Mediathek.</p>
        <div className="flex flex-col gap-4">
          <Image src="/rlg_logo.webp" alt="RLG Logo" width={200} height={200} className="dark:invert" />
        </div>
      </main>
    </div>
  );
}
