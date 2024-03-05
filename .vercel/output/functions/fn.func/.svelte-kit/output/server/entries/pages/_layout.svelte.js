import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routeId;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  routeId = $page.route.id;
  $$unsubscribe_page();
  return `<nav class="navContainer flex w-full justify-between gap-2 border-b pt-4 text-[1.5rem] sm:w-auto sm:justify-start"><a href="./" class="${["nav-link", routeId == "/" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-h35adr">Home</a> <a href="./projects" class="${["nav-link", routeId == "/projects" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-h005sc">Projects</a> <a href="./information" class="${["nav-link", routeId == "/information" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-17wm0ag">Information</a></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex h-full px-4 py-4" data-svelte-h="svelte-1h9r24y"><div class="flex w-1/3 flex-col md:w-2/5"><h3 class="text-base leading-tight text-white opacity-50">©</h3> <h3 class="text-base leading-tight text-white">2024</h3></div> <div class="flex w-2/3 flex-col md:w-3/5"><h3 class="text-base leading-tight text-white opacity-50">Made w/ Love</h3> <h3 class="text-base leading-tight text-white">Abhay Kalsi</h3></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="page-wrapper relative"><header class="sticky top-0 z-50 bg-white px-4">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}</header> <main class="relative z-10 min-h-svh rounded-b-lg bg-white px-4 pt-4">${slots.default ? slots.default({}) : ``}</main> <footer class="sticky bottom-0 z-0 w-full">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer></div>`;
});
export {
  Layout as default
};
