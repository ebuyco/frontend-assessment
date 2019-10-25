// module.exports = {
// 	plugins: [require('autoprefixer')({})],
// };
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url"),
    require("postcss-cssnext"),
    require("postcss-browser-reporter")
  ]
};
