import Image from 'next/image';

export const AppHeader = () => {
  return (
    <div className="fixed left-0 top-0 flex w-full border-b border-gray-300 p-2 dark:border-neutral-800 dark:from-inherit ">
      <a
        className="flex place-items-center gap-2 pointer-events-auto"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" // TODO: Update link to RLG Mediathek (ENV)
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/rlg_logo.webp" alt="RLG Logo" className="dark:invert" width={42} height={24} priority />
        <h1 className="m-0 text-2xl font-light">
          <span className="font-black">RLG</span>
          Mediathek
        </h1>
      </a>
    </div>
  );
};
