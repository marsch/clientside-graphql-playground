const { FuseBox, SassPlugin, CSSPlugin, BabelPlugin } = require("fuse-box");


// Create FuseBox Instance
let fuse = new FuseBox({
    homeDir: "src/",
    sourcemaps: false,
    outFile: "./build/out.js",
    log: true,
    debug: true,
    plugins: [
        SassPlugin(),
        CSSPlugin(),
        BabelPlugin()
    ]
});

fuse.devServer(">index.tsx");