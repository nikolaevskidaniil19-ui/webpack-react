const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
        entry: path.resolve(__dirname, './src/index.ts'),
        output: {
                path: path.resolve(__dirname, './dist'),
                filename: 'main.js',
                clean: true,
        },

        module: {
                rules: [
                        // 1. Правило для TypeScript и JavaScript
                        {
                                test: /\.(ts|tsx|js|jsx)$/,
                                use: [{ loader: 'ts-loader' }],
                                exclude: /node_modules/,
                        },
                        // 2. Правило для стилей (SASS/SCSS/CSS)
                        {
                                test: /\.(sa|sc|c)ss$/,
                                use: [
                                        MiniCssExtractPlugin.loader,
                                        {
                                                loader: 'css-loader',
                                                options: {
                                                        modules: {
                                                                mode: 'local',
                                                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                                                auto: /\.module\.\w+$/i,
                                                                namedExport: false,
                                                        },
                                                        importLoaders: 2,
                                                },
                                        },
                                        'postcss-loader',
                                        {
                                                loader: 'sass-loader',
                                                options: { sourceMap: true },
                                        },
                                ],
                        },
                        // 3. Правило для популярных форматов изображений
                        {
                            test: /\.(png|jpg|gif|webp)$/,
                            type: 'asset/resource',
                            generator: {
                                filename: 'static/images/[hash][ext][query]',
                            },
                        },
                        // 4. Правило для работы с файлами шрифтов
                        {
                            test: /\.(woff(2)?|eot|ttf|otf)$/,
                            type: 'asset/resource',
                            generator: {
                                filename: 'static/fonts/[hash][ext][query]',
                            },
                        },
                        
                        // 5. ДОБАВЛЕНО СЮДА: Ваше новое правило для SVG-компонентов из задания
                        {
                          test: /\.svg$/i,
                          issuer: /\.[jt]sx?$/,
                          use: ['@svgr/webpack', 'url-loader'],
                        },
                ],
        },
        resolve: {
                extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
        },

        plugins: [
                new HTMLWebpackPlugins({
                        template: path.resolve(__dirname, 'public/index.html'),
                }),
                new MiniCssExtractPlugin({
                        filename: 'static/styles/index.css',
                }),
        ],
};