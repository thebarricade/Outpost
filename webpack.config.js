module.exports = {
    entry: "./outpost/outpost.js",
    output: {
        path: __dirname + "/outpost",
        filename: "outpost.bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less"}
        ]
    }
};