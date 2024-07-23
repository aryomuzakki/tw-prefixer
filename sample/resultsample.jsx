import Image from "next/image";

export default function Home() {
  return (
    <main className="tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-between tw-p-24">
      <div className="tw-z-10 tw-max-w-5xl tw-w-full tw-items-center tw-justify-between tw-font-mono tw-text-sm lg:tw-flex">
        <p className="tw-fixed tw-left-0 tw-top-0 tw-flex tw-w-full tw-justify-center tw-border-b tw-border-gray-300 tw-bg-gradient-to-b tw-from-zinc-200 tw-pb-6 tw-pt-8 tw-backdrop-blur-2xl dark:tw-border-neutral-800 dark:tw-bg-zinc-800/30 dark:tw-from-inherit lg:tw-static lg:tw-w-auto lg:tw-rounded-xl lg:tw-border lg:tw-bg-gray-200 lg:tw-p-4 lg:dark:tw-bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="tw-font-mono tw-font-bold">src/app/page.js</code>
        </p>
        <div className="tw-fixed tw-bottom-0 tw-left-0 tw-flex tw-h-48 tw-w-full tw-items-end tw-justify-center tw-bg-gradient-to-t tw-from-white tw-via-white dark:tw-from-black dark:tw-via-black lg:tw-static lg:tw-h-auto lg:tw-w-auto lg:tw-bg-none">
          <a
            className="tw-pointer-events-none tw-flex tw-place-items-center tw-gap-2 tw-p-8 lg:tw-pointer-events-auto lg:tw-p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:tw-invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="tw-relative tw-flex tw-place-items-center before:tw-absolute before:tw-h-[300px] before:tw-w-full sm:before:tw-w-[480px] before:-tw-translate-x-1/2 before:tw-rounded-full before:bg-gradient-radial before:tw-from-white before:tw-to-transparent before:tw-blur-2xl before:tw-content-[''] after:tw-absolute after:-tw-z-20 after:tw-h-[180px] after:tw-w-full sm:after:tw-w-[240px] after:tw-translate-x-1/3 after:bg-gradient-conic after:tw-from-sky-200 after:tw-via-blue-200 after:tw-blur-2xl after:tw-content-[''] before:dark:tw-bg-gradient-to-br before:dark:tw-from-transparent before:dark:tw-to-blue-700 before:dark:tw-opacity-10 after:dark:tw-from-sky-900 after:dark:tw-via-[#0141ff] after:dark:tw-opacity-40 before:lg:tw-h-[360px] tw-z-[-1]">
        <Image
          className="tw-relative dark:tw-drop-shadow-[0_0_0.3rem_#ffffff70] dark:tw-invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="tw-mb-32 tw-grid tw-text-center lg:tw-max-w-5xl lg:tw-w-full lg:tw-mb-0 lg:tw-grid-cols-4 lg:tw-text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group tw-rounded-lg tw-border tw-border-transparent tw-px-5 tw-py-4 tw-transition-colors hover:tw-border-gray-300 hover:tw-bg-gray-100 hover:dark:tw-border-neutral-700 hover:dark:tw-bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`tw-mb-3 tw-text-2xl tw-font-semibold`}>
            Docs{" "}
            <span className="tw-inline-block tw-transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`tw-m-0 tw-max-w-[30ch] tw-text-sm tw-opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group tw-rounded-lg tw-border tw-border-transparent tw-px-5 tw-py-4 tw-transition-colors hover:tw-border-gray-300 hover:tw-bg-gray-100 hover:dark:tw-border-neutral-700 hover:dark:tw-bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`tw-mb-3 tw-text-2xl tw-font-semibold`}>
            Learn{" "}
            <span className="tw-inline-block tw-transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`tw-m-0 tw-max-w-[30ch] tw-text-sm tw-opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group tw-rounded-lg tw-border tw-border-transparent tw-px-5 tw-py-4 tw-transition-colors hover:tw-border-gray-300 hover:tw-bg-gray-100 hover:dark:tw-border-neutral-700 hover:dark:tw-bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`tw-mb-3 tw-text-2xl tw-font-semibold`}>
            Templates{" "}
            <span className="tw-inline-block tw-transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`tw-m-0 tw-max-w-[30ch] tw-text-sm tw-opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group tw-rounded-lg tw-border tw-border-transparent tw-px-5 tw-py-4 tw-transition-colors hover:tw-border-gray-300 hover:tw-bg-gray-100 hover:dark:tw-border-neutral-700 hover:dark:tw-bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`tw-mb-3 tw-text-2xl tw-font-semibold`}>
            Deploy{" "}
            <span className="tw-inline-block tw-transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`tw-m-0 tw-max-w-[30ch] tw-text-sm tw-opacity-50 tw-text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
