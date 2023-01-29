const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/": {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>Ana sayfaya hos geldiniz.</h2>");
      break;
    }
    case "/hakkimda": {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>Hakkimda sayfasina hos geldiniz.</h2>");
      break;
    }
    case "/iletisim": {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>İletisim sayfasina hos geldiniz.</h2>");
      break;
    }
    default: {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h2>404 SAYFA BULUNAMADI</h2>");
    }
  }

  res.end();
});

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
