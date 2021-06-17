const path = require("path");
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    console.log("Page – ", page.path)
    if (page.path.match(/^\//)) {

        createPage({
            path: "/",
            matchPath: "/*",
            component: path.resolve(`src/pages/index.js`),
        })
    }
}
