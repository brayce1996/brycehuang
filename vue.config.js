module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "static/" : "/",
    outputDir: process.env.NODE_ENV === "production" ? "dist/static" : "dist",
    indexPath: process.env.NODE_ENV === "production" ? "../index.html" : "index.html",
    css: {
        loaderOptions: {
            sass: {
                prependData: "@import \"./src/styles/_variables.scss\";",
            },
        },
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        "vue-style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                // enable CSS Modules
                                modules: true,
                                // customize generated class names
                                localIdentName: "[local]_[hash:base64:8]",
                            },
                        },
                    ],
                },
            ],
        },
    },
    chainWebpack: (config) => {
        config
            .plugin("html")
            .tap((args) => {
                // eslint-disable-next-line no-param-reassign
                args[0].title = "Bryce Huang";
                return args;
            });
    },
};
