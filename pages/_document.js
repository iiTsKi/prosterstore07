import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="initial-loader">Loading...</div>

          <Main />
          <NextScript />

          <style>{`
            #initial-loader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: #111;
              color: #fff;
              font-size: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              font-family: sans-serif;
            }
          `}</style>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function () {
                  var loader = document.getElementById('initial-loader');
                  if (loader) loader.style.display = 'none';
                });
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
