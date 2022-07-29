module.exports = {
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
