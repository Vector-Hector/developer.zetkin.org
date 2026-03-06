export default function proxyPlugin() {
  return {
    name: 'proxy-plugin',
    configureWebpack() {
      return {
        devServer: {
          proxy: [{
            context: ['/api'],
            target: 'https://app.dev.zetkin.org',
            changeOrigin: true,
            secure: false,
            pathRewrite: (path) => {
              const urlPart = path.replace(/^\/api\/https?:\/+[^/]+/, '');
              return urlPart || '/';
            },
          }]
        },
      };
    },
  };
}