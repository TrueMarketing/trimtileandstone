var plugins = [{
      plugin: require('/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-plugin-tinacms/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-tinacms-git","id":"ca65af08-4c10-5e6f-8b14-831709d38ab4","name":"gatsby-tinacms-git","version":"0.2.14","pluginOptions":{"plugins":[]},"nodeAPIs":["onCreateDevServer"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]},{"resolve":"/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-tinacms-remark","id":"4e049a88-2f70-5135-883f-87a76d01585d","name":"gatsby-tinacms-remark","version":"0.6.0","pluginOptions":{"plugins":[]},"nodeAPIs":["setFieldsOnGraphQLNodeType"],"browserAPIs":[],"ssrAPIs":[]}],"sidebar":{"hidden":false,"position":"displace","theme":{"color":{"primary":{"light":"#DD2C00","medium":"#DD2C00","dark":"#DD2C00"}}}}},
    },{
      plugin: require('/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/src/components/siteLayout.js"},
    },{
      plugin: require('/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Trim Tile and Stone","short_name":"Trim Tile and Stone","start_url":"/","background_color":"#DD2C00","theme_color":"#DD2C00","display":"minimal-ui","icon":"content/images/icon.png"},
    },{
      plugin: require('/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-remark-images/gatsby-ssr'),
      options: {"plugins":[],"maxWidth":880,"withWebp":true},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
