import React from "react";
import ReactDOM from "react-dom";

// import ReactDOMServer from "react-dom/server";
import "./index.less";
import App from "./App";
// import PDF from "./components/Pdf";

ReactDOM.render(<App />, document.getElementById("root"));
// const html = ReactDOMServer.renderToString(<App />);
// // fs.writeFileSync(path.resolve(__dirname, "temp.html", html));
// console.log(html);
