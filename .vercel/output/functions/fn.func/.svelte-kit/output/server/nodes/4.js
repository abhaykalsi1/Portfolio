

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DXlYWwUJ.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CoUGhd4_.js"];
export const stylesheets = [];
export const fonts = [];
