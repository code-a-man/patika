const Koa = require("koa");
const app = new Koa();
const port = 3000;

app.use((ctx) => {
  const url = ctx.path;
  switch (url) {
    case "/": {
      ctx.status = 200;
      ctx.body = "<h1>Ana sayfaya hos geldiniz.</h1>";
      break;
    }
    case "/hakkimda": {
      ctx.status = 200;
      ctx.body = "<h1>Hakkimda sayfasina hos geldiniz.</h1>";
      break;
    }
    case "/iletisim": {
      ctx.status = 200;
      ctx.body = "<h1>İletisim sayfasina hos geldiniz.</h1>";
      break;
    }
    default: {
      ctx.status = 404;
      ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>";
    }
  }
});

app.listen(port);
