const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: "Ivanhoe",
    author: "Sir Walter Scott",
  },
  {
    id: 2,
    name: "Color Magic",
    author: "Terry Pratchett",
  },
  {
    id: 3,
    name: "The Bluest eye",
    author: "Toni Morrison",
  },
];

const generateCards = () => {
  return products
    .map((product) => {
      return `
        <div class='card'>
            <p class='card-title'>${product.name}</p>
            <p class='card-author'>Author: ${product.author}</p>
        </div>
    `;
    })
    .join("");
};

app.get("/", (req, res) => res.send("Hello API!"));

app.get("/products/:id", (req, res) => {
  res.send("Page not found");
});

app.get("/products", (req, res) => {
  const page = `
    <div class='container'>
      ${generateCards()}
    </div>
  `;
  res.send(page);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
