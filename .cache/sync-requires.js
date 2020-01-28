const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/src/templates/post.js"))),
  "component---src-templates-list-js": hot(preferDefault(require("/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/src/templates/list.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/.cache/dev-404-page.js")))
}

