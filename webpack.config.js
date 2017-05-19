var getConfig = require('hjs-webpack');
var pkg = require('./package.json');

const SITE_TITLE = pkg.description;

module.exports = getConfig({
  in: 'src/app.js',
  out: 'dist',
  clearBeforeBuild: true,
  html: function(data) {
    return {
      'index.html': [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '<meta charset="UTF-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
        '<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
        '<title>' + pkg.description + '</title>',
        '</head>',
        '<body>',
        '<div id="root"></div>',
        '<script src="' + data.main + '"></script>',
        '</body>',
        '<script>',
        '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){',
        '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),',
        'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)',
        '})(window,document,"script","//www.google-analytics.com/analytics.js","ga");',
        'ga("create", "' + pkg.GA_TRACKING_CODE + '", "auto");',
        'ga("send", "pageview");',
        '</script>',
        '</html>'
      ].join('')
    };
  }
});
