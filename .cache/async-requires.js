// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-post-js": () => import("../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-list-js": () => import("../src/templates/list.js" /* webpackChunkName: "component---src-templates-list-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

