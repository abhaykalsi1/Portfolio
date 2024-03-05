import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-feqd5z_START -->${$$result.title = `<title>Info | Abhay Kalsi</title>`, ""}<!-- HEAD_svelte-feqd5z_END -->`, ""} <div class="flex flex-col" data-svelte-h="svelte-unbzv5"><h1 class="mt-8 border-b text-[4rem]">Information</h1> <div class="mt-16 flex w-full"><div class="w-1/3 md:w-2/5"><h3 class="text-[1.5rem]">( Contact )</h3></div> <span class="w-2/3 max-w-[30ch] text-[2rem] md:text-[3rem]"><span class="opacity-60">Have Brain, Will Travel.</span> <a href="mailto:abhaykalsi@outlook.com">abhaykalsi(at)outlook.com</a></span></div></div>`;
});
export {
  Page as default
};
