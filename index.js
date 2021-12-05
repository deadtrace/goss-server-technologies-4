var http = require("http");

var app = http.createServer(async function (req, res) {
  if (req.url == "/result4/") {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET,POST,PUT,DELETE,OPTIONS"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "x-test,Content-Type,Accept,Access-Control-Allow-Headers"
        );
        res.end(
          JSON.stringify({
            message: "deadtrace",
            "x-result": req.headers["x-test"],
            "x-body": body,
          })
        );
      });
  } else {
    res.end("Пока работает только /result4/");
  }
});

app.listen(process.env.PORT || 80);
