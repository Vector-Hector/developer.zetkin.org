export default function proxyPlugin() {
  return {
    name: 'proxy-plugin',
    configureWebpack() {
      return {
        devServer: {
          proxy: [
            {
              context: ['/api', '/api2'],
              target: 'https://app.dev.zetkin.org',
              changeOrigin: true,
              secure: false,
              pathRewrite: (path) => {
                if (path.startsWith('/api2/')) {
                  const urlPart = path.replace(/^\/api2\/https?:\/+[^/]+/, '');
                  return '/api2' + (urlPart || '/');
                }

                const urlPart = path.replace(/^\/api\/https?:\/+[^/]+/, '');
                return urlPart || '/';
              },
            },
          ],
        },
      };
    },
  };
}
