import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export const AppHeader = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-black p-2 dark:border-white dark:from-inherit">
      <a
        className="pointer-events-auto flex place-items-center gap-2"
        href={'/'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/rlg_logo.webp" alt="RLG Logo" className="dark:invert" width={42} height={24} priority />
        <h1 className="m-0 text-2xl font-light">
          <span className="font-black">RLG</span>
          Mediathek
        </h1>
      </a>
      <div className="flex items-center gap-2">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
