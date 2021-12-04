import {respond} from "@sveltejs/kit/ssr";
import {create_ssr_component, validate_component, missing_component, escape, subscribe, add_attribute} from "svelte/internal";
import {setContext, afterUpdate, onMount} from "svelte";
import {writable} from "svelte/store";
import "svelte/transition";
var root_svelte_svelte_type_style_lang = "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}";
const css$4 = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores: stores2} = $$props;
  let {page} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores2);
  afterUpdate(stores2.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores2.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores2 !== void 0)
    $$bindings.stores(stores2);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$4);
  {
    stores2.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		<title>Sveltekit + Electron</title>\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
let options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-33bd4473.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-33bd4473.js", "/./_app/chunks/vendor-643915a1.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2) => {
      console.error(error2.stack);
      error2.stack = options.get_stack(error2);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: false,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
const empty = () => ({});
const manifest = {
  assets: [{"file": "favicon.ico", "size": 1150, "type": "image/vnd.microsoft.icon"}, {"file": "icon.png", "size": 35815, "type": "image/png"}, {"file": "sveltekit-electron.svg", "size": 10832, "type": "image/svg+xml"}],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
const module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  })
};
const metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-8ef6876d.js", "css": ["/./_app/assets/pages/__layout.svelte-b3f22837.css"], "js": ["/./_app/pages/__layout.svelte-8ef6876d.js", "/./_app/chunks/vendor-643915a1.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-d9c12dbf.js", "css": [], "js": ["/./_app/error.svelte-d9c12dbf.js", "/./_app/chunks/vendor-643915a1.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-c7de6ea2.js", "css": ["/./_app/assets/pages/index.svelte-bab0196d.css"], "js": ["/./_app/pages/index.svelte-c7de6ea2.js", "/./_app/chunks/vendor-643915a1.js"], "styles": null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {"base": "", "assets": "/."}});
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender});
}
var __layout_svelte_svelte_type_style_lang = ".dragbar.svelte-zsqdpe{-webkit-app-region:drag;position:absolute;z-index:100;height:40px;width:100%}";
const css$3 = {
  code: ".dragbar.svelte-zsqdpe{-webkit-app-region:drag;position:absolute;z-index:100;height:40px;width:100%}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from 'svelte';\\nlet ready = false;\\nonMount(() => (ready = true));\\n</script>\\n\\n<div class=\\"dragbar\\" />\\n\\n{#if ready}\\n\\t<slot />\\n{/if}\\n\\n<style>\\n\\t.dragbar {\\n\\t\\t-webkit-app-region: drag;\\n\\t\\tposition: absolute;\\n\\t\\tz-index: 100;\\n\\t\\theight: 40px;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n</style>\\n"],"names":[],"mappings":"AAYC,QAAQ,cAAC,CAAC,AACT,kBAAkB,CAAE,IAAI,CACxB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,AACZ,CAAC"}`
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ready = false;
  onMount(() => ready = true);
  $$result.css.add(css$3);
  return `<div class="${"dragbar svelte-zsqdpe"}"></div>

${ready ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load({error: error2, status}) {
  return {props: {error: error2, status}};
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error2} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape(status)}</h1>

<p>${escape(error2.message)}</p>


${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error,
  load
});
let stores = {};
function getStore(id, initialValue) {
  return stores[id] || (stores[id] = writable(initialValue));
}
var Counter_svelte_svelte_type_style_lang = "button.svelte-1mhlyxc{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums}button.svelte-1mhlyxc:focus{border:2px solid #ff3e00}button.svelte-1mhlyxc:active{background-color:rgba(255, 62, 0, 0.2)}";
const css$2 = {
  code: "button.svelte-1mhlyxc{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums}button.svelte-1mhlyxc:focus{border:2px solid #ff3e00}button.svelte-1mhlyxc:active{background-color:rgba(255, 62, 0, 0.2)}",
  map: `{"version":3,"file":"Counter.svelte","sources":["Counter.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { getStore } from '$lib/utils/hmr-stores';\\nexport let id;\\nconst count = getStore(id, 0);\\nconst increment = () => {\\n    $count += 1;\\n};\\n</script>\\n\\n<button {id} on:click={increment}>\\n\\tClicks: {$count}\\n</button>\\n\\n<style>\\n\\tbutton {\\n\\t\\tfont-family: inherit;\\n\\t\\tfont-size: inherit;\\n\\t\\tpadding: 1em 2em;\\n\\t\\tcolor: #ff3e00;\\n\\t\\tbackground-color: rgba(255, 62, 0, 0.1);\\n\\t\\tborder-radius: 2em;\\n\\t\\tborder: 2px solid rgba(255, 62, 0, 0);\\n\\t\\toutline: none;\\n\\t\\twidth: 200px;\\n\\t\\tfont-variant-numeric: tabular-nums;\\n\\t}\\n\\tbutton:focus {\\n\\t\\tborder: 2px solid #ff3e00;\\n\\t}\\n\\tbutton:active {\\n\\t\\tbackground-color: rgba(255, 62, 0, 0.2);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAaC,MAAM,eAAC,CAAC,AACP,WAAW,CAAE,OAAO,CACpB,SAAS,CAAE,OAAO,CAClB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACvC,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACrC,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,oBAAoB,CAAE,YAAY,AACnC,CAAC,AACD,qBAAM,MAAM,AAAC,CAAC,AACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,AAC1B,CAAC,AACD,qBAAM,OAAO,AAAC,CAAC,AACd,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AACxC,CAAC"}`
};
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $count, $$unsubscribe_count;
  let {id} = $$props;
  const count = getStore(id, 0);
  $$unsubscribe_count = subscribe(count, (value) => $count = value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$2);
  $$unsubscribe_count();
  return `<button${add_attribute("id", id, 0)} class="${"svelte-1mhlyxc"}">Clicks: ${escape($count)}
</button>`;
});
var Logo_svelte_svelte_type_style_lang = "img.svelte-gppvtg{height:16rem;width:16rem;user-select:none}";
const css$1 = {
  code: "img.svelte-gppvtg{height:16rem;width:16rem;user-select:none}",
  map: `{"version":3,"file":"Logo.svelte","sources":["Logo.svelte"],"sourcesContent":["<script>\\n\\timport { fly } from 'svelte/transition';\\n\\timport { onMount } from 'svelte';\\n\\tlet visible = false;\\n\\tonMount(() => (visible = true));\\n</script>\\n\\n{#if visible}\\n\\t<img\\n\\t\\tsrc=\\"/sveltekit-electron.svg\\"\\n\\t\\talt=\\"Svelte Logo\\"\\n\\t\\tdraggable=\\"false\\"\\n\\t\\tin:fly={{ y: 100, duration: 1500 }}\\n\\t/>\\n{:else}\\n\\t<div style=\\"height: 16rem\\" />\\n{/if}\\n\\n<style>\\n\\timg {\\n\\t\\theight: 16rem;\\n\\t\\twidth: 16rem;\\n\\t\\tuser-select: none;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmBC,GAAG,cAAC,CAAC,AACJ,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,IAAI,AAClB,CAAC"}`
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible = false;
  onMount(() => visible = true);
  $$result.css.add(css$1);
  return `${visible ? `<img src="${"/sveltekit-electron.svg"}" alt="${"Svelte Logo"}" draggable="${"false"}" class="${"svelte-gppvtg"}">` : `<div style="${"height: 16rem"}"></div>`}`;
});
var index_svelte_svelte_type_style_lang = ":root{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}body{margin:0;padding:0}main.svelte-1n2tm7i{padding:2em 1em 1em 1em;text-align:center;animation:svelte-1n2tm7i-fade 1s;margin:0 auto}@keyframes svelte-1n2tm7i-fade{from{opacity:0}to{opacity:1}}";
const css = {
  code: ":root{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}body{margin:0;padding:0}main.svelte-1n2tm7i{padding:2em 1em 1em 1em;text-align:center;animation:svelte-1n2tm7i-fade 1s;margin:0 auto}@keyframes svelte-1n2tm7i-fade{from{opacity:0}to{opacity:1}}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Counter from '$lib/Counter.svelte';\\nimport Logo from '$lib/Logo.svelte';\\n</script>\\n\\n<main>\\n\\t<Logo />\\n\\n\\t<h1>Hello Electron!</h1>\\n\\n\\t<Counter id=\\"0\\" />\\n</main>\\n\\n<style>\\n\\t:root {\\n\\t\\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\\n\\t\\t\\tCantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n\\t}\\n\\n\\t:global(body) {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\tmain {\\n\\t\\tpadding: 2em 1em 1em 1em;\\n\\t\\ttext-align: center;\\n\\t\\tanimation: fade 1s;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\t@keyframes fade {\\n\\t\\tfrom {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n</style>\\n"],"names":[],"mappings":"AAaC,KAAK,AAAC,CAAC,AACN,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC;GAClF,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AACtD,CAAC,AAEO,IAAI,AAAE,CAAC,AACd,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,AACX,CAAC,AAED,IAAI,eAAC,CAAC,AACL,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACxB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,mBAAI,CAAC,EAAE,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,WAAW,mBAAK,CAAC,AAChB,IAAI,AAAC,CAAC,AACL,OAAO,CAAE,CAAC,AACX,CAAC,AACD,EAAE,AAAC,CAAC,AACH,OAAO,CAAE,CAAC,AACX,CAAC,AACF,CAAC"}`
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1n2tm7i"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}

	<h1 class="${"svelte-1n2tm7i"}">Hello Electron!</h1>

	${validate_component(Counter, "Counter").$$render($$result, {id: "0"}, {}, {})}
</main>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
export {init, render};