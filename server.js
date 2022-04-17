const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "emais",
    },
    {
      title: "E",
      message: "JS usa o JavaScript para renderizar as pages",
    },
    {
      title: "M",
      message: "ais que incrivel é desafiador",
    },
    {
      title: "A",
      message: "lo EJS?, to renderizando",
    },
    {
      title: "I",
      message: "sso é incrivel",
    },
    {
      title: "S",
      message: "Sim você está aprendendo muito",
    },
  ];

  const subTitle =
    "O EJS é uma linguagem de modelagem para a criação de páginas HTML utilizando JavaScript";
  res.render("./pages/index", {
    qualitys: items,
    subTitle: subTitle,
  });
});

app.get("/sobre", function (req, res) {
  res.render("./pages/about");
});

app.listen(8080);

console.log("Rodando");
