import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import path from "path";
import fs from "fs";

//asset-manifest.json에서 파일 경로들을 조회한다
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf-8")
);
function createPage(root) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <title>React App</title>
      <link href="${manifest.files["main.css"]}" rel="stylesheet" />
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${root}</div>
      <script src="${manifest.files["main.js"]}"></script>
    </body>
  </html>
  `;
}
const app = express();
//서버사이드 렌더링을 처리할 핸들러 함수이다
const serverRender = (req, res, next) => {
  //이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해준다
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx); //렌더링을 하고
  res.send(createPage(root));
};
const serve = express.static(path.resolve("./build"), {
  index: false, // "/" 경로에서 index.html을 보여 주지 않도록 설정
});
app.use(serve);
app.use(serverRender);
//8000번 포트로 서버를 가동한다
app.listen(8000, () => {
  console.log("Running on http://localhost:8000");
});
