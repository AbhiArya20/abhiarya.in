import { Button } from "@abhiarya/ui/components/ui/button";
// import Image from "next/image";

// const badges = [
//   { title: "Vercel", src: "/vercel.svg" },
//   { title: "Next.js", src: "/next.svg" },
//   { title: "Next.js", src: "/next.svg" },
//   { title: "Next.js", src: "/next.svg" },
//   { title: "Next.js", src: "/next.svg" },
//   { title: "Next.js", src: "/next.svg" },
// ]

export default function Home() {
  return <div className="flex justify-center items-center min-h-screen">
    <Button>Hello</Button>
  </div>
}

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>


//         <div className="flex items-center justify-center">
//           <span className="text-[11.25rem] font-bold bg-[linear-gradient(270deg,_#FFFFFF25_0%,_#FFFFFF00_100%)] bg-clip-text text-transparent">SKILLS</span>
//           <h2 className="text-[6.25rem] capitalize font-bold absolute text-white">Skills</h2>
//         </div>

//         {
//           badges.map((badge, index) => (
//             <div key={index} className="flex cursor-default items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono text-sm font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5">
//               <Image alt="Prisma" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="size-5 text-transparent" src={badge.src} />
//               {badge.title}
//             </div>


//           ))
//         }

//         {
//           badges.map((badge, index) => (
//             <button key={index} className="text-white bg-neutral-500 text-sm font-light w-max px-2 py-2 rounded-lg flex items-center gap-2 flex-row-reverse leading-none"> {badge.title}
//               <Image width="20" height="20" className="flex items-center justify-center w-[1em] h-[1em] shrink-0" src={badge.src} alt="Flutter icon" />
//             </button>
//           ))
//         }


//         {/* <section className="bg-zinc-900 text-white min-h-screen">
//           <main className="py-[5vh] 
//           w-11/12 md:w-10/12 xl:w-[45%]
//            mx-auto flex flex-col gap-6"> */}
//         <div className="flex flex-col md:flex-row items-center my-1 justify-start gap-6" >
//           <div className="flex gap-6 flex-wrap items-center justify-center md:justify-start w-full">
//             <a className=" p-2 text-sm rounded-md flex items-center gap-2 bg-zinc-800" href="/web/20250104151547/https://www.ramgoel.com/?pt=side">
//               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
//               Home</a>
//             <a className="p-2 text-sm group  mr-auto rounded-md flex items-center gap-1 ml-[-10px] " href="https://web.archive.org/web/20250104151547/https://medium.com/@rgoel766">
//               <p className="text-sm group-hover:translate-x-[2px] duration-500 group-hover:translate-y-[-2px] transition-all">Blog</p>
//               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right group-hover:translate-x-[2px] duration-500 group-hover:translate-y-[-2px] transition-all"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><div className="flex items-center flex-1 gap-6 justify-end"><div >
//                 <a data-tooltip-id="hover-tooltip" data-tooltip-content="LinkedIn" className="flex items-center gap-2 hover:scale-110 transition-all" href="https://web.archive.org/web/20250104151547/https://www.linkedin.com/in/ramgoel/">
//                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
//                 </a>
//               </div>
//               <div >
//                 <a data-tooltip-id="hover-tooltip" data-tooltip-content="Github" className="flex items-center gap-2 hover:scale-110 transition-all" href="https://web.archive.org/web/20250104151547/https://github.com/RamGoel"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
//                 </a>
//               </div>
//               <div >
//                 <a data-tooltip-id="hover-tooltip" data-tooltip-content="Twitter" className="flex items-center gap-2 hover:scale-110 transition-all" href="https://web.archive.org/web/20250104151547/https://twitter.com/theramgoel"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></div>
//               <div className="md:hidden" ><a data-tooltip-id="hover-tooltip" data-tooltip-content="Email" className="flex items-center gap-2 hover:scale-110 transition-all" href="https://web.archive.org/web/20250104151547/mailto:rgoel766@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></a></div><a className="text-neutral-500 hidden md:inline-flex hover:text-white " href="https://web.archive.org/web/20250104151547/mailto:rgoel766@gmail.com">rgoel766@gmail.com</a></div></div></div><div className="flex flex-col gap-2">
//           <h1 className="text-2xl font-bold">Hi, I&apos;m Ram Goel</h1>
//           <ul className="flex list-disc ml-4 flex-col gap-2">
//             <li className="text-neutral-500" >A full-stack engineer from India.</li>
//             <li className="text-neutral-500" >Worked with few startups, <a target="_blank" className="underline text-white hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://www.linkedin.com/in/ramgoel/details/experience/">learn more</a></li><li className="text-neutral-500" >make videos about frontend on <a target="_blank" className="underline text-white hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://www.youtube.com/@theRamGoel">YouTube</a></li>
//             <li className="text-neutral-500" >Let&apos;s talk how we can work together!</li></ul>
//         </div>
//         <ol className="flex list-decimal flex-col gap-3">
//           <div className="flex flex-col items-start md:flex-row md:items-center justify-between">
//             <h3 className="text-xl font-bold">Side Projects</h3>
//           </div>
//           <li className="flex flex-col w-full md:flex-row items-center gap-2" >
//             <div className="hidden md:flex items-center flex-1 gap-2"><p className="">1.</p>
//               <a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://updatly.ramgoel.com/">Updatly</a>
//               <p className="text-neutral-500 text-left">ready to use changelog for your SaaS.</p>
//             </div><div className="flex md:hidden items-center w-full gap-2"><p className="">1.</p>
//               <a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://updatly.ramgoel.com/">Updatly</a>
//               <p className="text-neutral-500 ml-auto text-right">10 users</p><div data-tooltip-id="hover-tooltip" data-tooltip-content="Actively working on it" className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div></div><p className="block md:hidden w-full text-neutral-500 text-left">ready to use changelog for your SaaS.</p><div className="hidden md:flex items-center w-fit gap-2"><p className="text-neutral-500 ml-auto text-right">10 users</p><div data-tooltip-id="hover-tooltip" data-tooltip-content="Actively working on it" className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
//             </div></li>
//           <li className="flex flex-col w-full md:flex-row items-center gap-2" ><div className="hidden md:flex items-center flex-1 gap-2">
//             <p className="">2.</p><a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://lemma-ui.vercel.app/">LemmaUI</a>
//             <p className="text-neutral-500 text-left">Generate Code using Prompt/JSON using AI</p></div><div className="flex md:hidden items-center w-full gap-2"><p className="">2.</p>
//               <a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://lemma-ui.vercel.app/">LemmaUI</a>
//               <p className="text-neutral-500 ml-auto text-right">10 users</p></div><p className="block md:hidden w-full text-neutral-500 text-left">Generate Code using Prompt/JSON using AI</p>
//             <div className="hidden md:flex items-center w-fit gap-2"><p className="text-neutral-500 ml-auto text-right">10 users</p></div></li><li className="flex flex-col w-full md:flex-row items-center gap-2" >
//             <div className="hidden md:flex items-center flex-1 gap-2"><p className="">3.</p>
//               <a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://noterr.ramgoel.com/">Noterr</a>
//               <p className="text-neutral-500 text-left">save &amp; organize your bookmarks like a pro.</p></div><div className="flex md:hidden items-center w-full gap-2">
//               <p className=""></p><a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://noterr.ramgoel.com/">Noterr</a>
//               <p className="text-neutral-500 ml-auto text-right">20 users</p>
//               <div data-tooltip-id="hover-tooltip" data-tooltip-content="Actively working on it" className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
//             </div><p className="block md:hidden w-full text-neutral-500 text-left">save &amp; organize your bookmarks like a pro.</p>
//             <div className="hidden md:flex items-center w-fit gap-2"><p className="text-neutral-500 ml-auto text-right">20 users</p>
//               <div data-tooltip-id="hover-tooltip" data-tooltip-content="Actively working on it" className="bg-green-500 w-2 h-2 animate-pulse rounded-full">
//               </div></div></li><li className="flex flex-col w-full md:flex-row items-center gap-2" ><div className="hidden md:flex items-center flex-1 gap-2"><p className="">4.</p>
//                 <a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://dumbel.vercel.app/">Dumbel</a>
//                 <p className="text-neutral-500 text-left">match with developers, connect with people, etc.</p></div><div className="flex md:hidden items-center w-full gap-2">
//               <p className="">4.</p><a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://dumbel.vercel.app/">Dumbel</a>
//               <p className="text-neutral-500 ml-auto text-right">80 users</p></div><p className="block md:hidden w-full text-neutral-500 text-left">match with developers, connect with people, etc.</p>
//             <div className="hidden md:flex items-center w-fit gap-2"><p className="text-neutral-500 ml-auto text-right">80 users</p></div>
//           </li></ol><ol className="flex list-decimal flex-col gap-3"><h3 className="text-xl font-bold">Open Source Contributions</h3>
//           <li className="flex flex-col w-full md:flex-row items-center gap-2" ><div className="hidden md:flex items-center flex-1 gap-2">
//             {/* <img alt="DiceDB/website" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="rounded-full text-transparent" srcset="/web/20250104151547im_/https://www.ramgoel.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F112580013%3Fv%3D4&amp;w=32&amp;q=75 1x, /web/20250104151547im_/https://www.ramgoel.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F112580013%3Fv%3D4&amp;w=48&amp;q=75 2x" src="/web/20250104151547im_/https://www.ramgoel.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F112580013%3Fv%3D4&amp;w=48&amp;q=75"> */}
//             <a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://github.com/DiceDB/dice/pull/1386">DiceDB/website</a><p className="text-neutral-500 text-left">Improved the Navbar UX, and fixed some broken links. (Dec 2024)</p>
//           </div>
//             <div className="flex md:hidden items-center w-full gap-2">
//               <a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://github.com/DiceDB/dice/pull/1386">DiceDB/website (Dec 2024)</a>
//             </div><p className="block md:hidden w-full text-neutral-500 text-left">Improved the Navbar UX, and fixed some broken links.</p>
//           </li><li className="flex flex-col w-full md:flex-row items-center gap-2" ><div className="hidden md:flex items-center flex-1 gap-2">
//             {/* <img alt="AsyncAPI/website" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="rounded-full" className="text-transparent" srcset="/web/20250104151547im_/https://www.ramgoel.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F16401334%3Fs%3D280%26v%3D4&amp;w=32&amp;q=75 1x, /web/20250104151547im_/https://www.ramgoel.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F16401334%3Fs%3D280%26v%3D4&amp;w=48&amp;q=75 2x" src="/web/20250104151547im_/https://www.ramgoel.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F16401334%3Fs%3D280%26v%3D4&amp;w=48&amp;q=75"> */}
//             <a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://github.com/asyncapi/conference-website/pulls?q=is%3Apr+author%3ARamGoel+">AsyncAPI/website</a><p className="text-neutral-500 text-left">Conference archive page, and some design fixes. (Feb 2024)</p></div><div className="flex md:hidden items-center w-full gap-2"><a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://github.com/asyncapi/conference-website/pulls?q=is%3Apr+author%3ARamGoel+">AsyncAPI/website (Feb 2024)</a>
//             </div><p className="block md:hidden w-full text-neutral-500 text-left">Conference archive page, and some design fixes.</p>
//           </li><li className="flex flex-col w-full md:flex-row items-center gap-2" ><div className="hidden md:flex items-center flex-1 gap-2">
//             {/* <img alt="MojaGlobal/flint-ui" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="rounded-full" className="text-transparent" srcset="/web/20250104151547im_/https://www.ramgoel.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19564969%3Fs%3D280%26v%3D4&amp;w=32&amp;q=75 1x, /web/20250104151547im_/https://www.ramgoel.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19564969%3Fs%3D280%26v%3D4&amp;w=48&amp;q=75 2x" src="/web/20250104151547im_/https://www.ramgoel.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19564969%3Fs%3D280%26v%3D4&amp;w=48&amp;q=75"> */}
//             <a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://github.com/moja-global/FLINT-UI/pulls?q=is%3Apr+author%3ARamGoel+is%3Aclosed">MojaGlobal/flint-ui</a><p className="text-neutral-500 text-left">Some UI fixes when I was getting started (Feb 2024)</p></div><div className="flex md:hidden items-center w-full gap-2"><a className="underline hover:text-yellow-200 transition-all" href="https://web.archive.org/web/20250104151547/https://github.com/moja-global/FLINT-UI/pulls?q=is%3Apr+author%3ARamGoel+is%3Aclosed">MojaGlobal/flint-ui (Feb 2024)</a></div><p className="block md:hidden w-full text-neutral-500 text-left">Some UI fixes when I was getting started</p></li></ol>
//         {/* </main>
//         </section> */}


//         <form action="/api/signup" className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" id="newsletter" method="POST">
//           <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//             <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg>
//             <span className="ml-3">Stay up to date</span>
//           </h2>
//           <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Don&apos;t miss my next post — get it delivered straight to your inbox.</p>
//           <div className="mt-6 flex">
//             <input type="email" name="email" placeholder="Email address" aria-label="Email address" className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm" />
//             <input className="hidden" type="hidden" name="tag" value="12345" />
//             <input type="text" name="fullname"
//               // tabindex="-1" 
//               // autocomplete="off" 
//               required className="absolute opacity-0 w-0 h-0 z-10" aria-hidden="true" />
//             <button className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none" type="submit">Join</button>
//           </div>
//         </form>


//         <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"><h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg><span className="ml-3">Work</span></h2><ol className="mt-6 space-y-4"><li className="flex gap-4"><div className="dark:hidden relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//           <Image alt="" loading="lazy" width="1155" height="1000" decoding="async" data-nimg="1" className="h-7 w-7 text-transparent" src="/_next/static/media/vercel-icon-dark.2ebbf9a0.svg" /></div><div className="dark:visible hidden relative mt-1 dark:flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//             <Image alt="" loading="lazy" width="1155" height="1000" decoding="async" data-nimg="1" className="h-7 w-7text-transparent" src="/_next/static/media/vercel-icon-light.b9089c05.svg" /></div><dl className="flex flex-auto flex-wrap gap-x-2"><dt className="sr-only">Company</dt><dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Vercel</dd><dt className="sr-only">Role</dt><dd className="text-xs text-zinc-500 dark:text-zinc-400">Director of Sales Engineering</dd><dt className="sr-only">Date</dt><dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2021 until Present"><time
//             // datetime="2021"
//             >2021</time> <span aria-hidden="true">—</span> <time
//             // datetime="2025"
//             >Present</time></dd></dl></li><li className="flex gap-4"><div className="dark:hidden relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><Image alt="" loading="lazy" width="1090" height="427" decoding="async" data-nimg="1" className="h-7 w-7 text-transparent" src="/_next/static/media/leafly.dd3291a9.svg" /></div><div className="dark:visible hidden relative mt-1 dark:flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><Image alt="" loading="lazy" width="1090" height="427" decoding="async" data-nimg="1" className="h-7 w-7 text-transparent" src="/_next/static/media/leafly.dd3291a9.svg" /></div><dl className="flex flex-auto flex-wrap gap-x-2"><dt className="sr-only" >Company</dt><dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Leafly</dd><dt className="sr-only">Role</dt><dd className="text-xs text-zinc-500 dark:text-zinc-400">Senior Software Engineer</dd><dt className="sr-only">Date</dt><dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2019 until 2021"><time
//             // datetime="2019"
//             >2019</time> <span aria-hidden="true">—</span> <time
//             // datetime="2021"
//             >2021</time></dd></dl></li><li className="flex gap-4"><div className="dark:hidden relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><Image alt="" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="h-7 w-7 text-transparent" src="/_next/static/media/spreetail.d71273a9.png" /></div><div className="dark:visible hidden relative mt-1 dark:flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><Image alt="" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="h-7 w-7 text-transparent" src="/_next/static/media/spreetail.d71273a9.png" /></div><dl className="flex flex-auto flex-wrap gap-x-2"><dt className="sr-only">Company</dt><dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Spreetail</dd><dt className="sr-only">Role</dt><dd className="text-xs text-zinc-500 dark:text-zinc-400">Software Engineer</dd><dt className="sr-only">Date</dt><dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2016 until 2019"><time
//             // datetime="2016"
//             >2016</time> <span aria-hidden="true">—</span> <time
//             // datetime="2019"
//             >2019</time></dd></dl></li></ol></div>



//         <li className="group relative flex flex-col items-start"><div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><img alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" className="h-8 w-8 text-transparent" src="/_next/static/media/slater-white.acc77858.png" /></div><h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"><div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div><a href="https://tryslater.com"><span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span className="relative z-10">Slater</span></a></h2><p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Cron jobs made simple for serverless.</p><p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg><span className="ml-2">tryslater.com</span></p></li>



//       </main>

//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
