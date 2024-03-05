

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/information/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B25DnEpy.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CoUGhd4_.js"];
export const stylesheets = [];
export const fonts = [];
