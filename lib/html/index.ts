export default function template(url: string) {
  return `<!DOCTYPE html>
          <html>
          <head>
              <link rel="stylesheet" href="https://unpkg.com/@asyncapi/react-component@1.0.0-next.12/styles/default.min.css">
          </head>
          <body>
          
          <div id="asyncapi"></div>
          
          <script src="https://unpkg.com/@asyncapi/react-component@1.0.0-next.12/browser/standalone/index.js"></script>
          <script>
              AsyncApiStandalone.render({
                  schema: {
                      url: '${url}',
                      options: { method: "GET", mode: "cors" },
                  },
                  config: {
                      show: {
                          sidebar: true,
                      }
                  },
              }, document.getElementById('asyncapi'));
          </script>
          
          </body>
          </html>`
}