module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-tinacms/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-tinacms-git","id":"ca65af08-4c10-5e6f-8b14-831709d38ab4","name":"gatsby-tinacms-git","version":"0.2.14","pluginOptions":{"plugins":[]},"nodeAPIs":["onCreateDevServer"],"browserAPIs":["onClientEntry"],"ssrAPIs":[]},{"resolve":"/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/node_modules/gatsby-tinacms-remark","id":"4e049a88-2f70-5135-883f-87a76d01585d","name":"gatsby-tinacms-remark","version":"0.6.0","pluginOptions":{"plugins":[]},"nodeAPIs":["setFieldsOnGraphQLNodeType"],"browserAPIs":[],"ssrAPIs":[]}],"sidebar":{"hidden":false,"position":"displace","theme":{"color":{"primary":{"light":"#DD2C00","medium":"#DD2C00","dark":"#DD2C00"}}}}},
    },{
      plugin: require('../node_modules/gatsby-tinacms-git/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/ryderwishart/Documents/Projects/Work/Marketing/Websites/trimtileandstone/trimtileandstone/src/components/siteLayout.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Trim Tile and Stone","short_name":"Trim Tile and Stone","start_url":"/","background_color":"#DD2C00","theme_color":"#DD2C00","display":"minimal-ui","icon":"content/images/icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":880,"withWebp":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Lato:400,700"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
