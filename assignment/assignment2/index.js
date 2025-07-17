const fs = require('fs');
const readline = require('readline');
const { readUser } = require("../IO/io.js");
const { readProducts } = require("../IO/io.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function order() {
  const user = await readUser('./user.txt');
  const products = await readProducts('./product.txt');
  console.log("Users:", user);
  console.log("Products:", products);

  rl.question(" user id: ", (userId) => {
    rl.question(" product id: ", (productId) => {
      const userFound = user.find(u => u.id === parseInt(userId));
      const productFound = products.find(p => p.id === parseInt(productId));

      if (userFound && productFound) {
        const orderData = {
          userId: userFound.id,
          username: userFound.username,
          productId: productFound.id,
          productName: productFound.name,
            };
            
            fs.appendFile(JSON.stringify(orderData) + '\n', (err) => {
            if (err) {
              console.error( err);
            } else {
              console.log("Order placed ");
            }}
        );
      } else {
        console.log(" not found"); }
    });
 });
}

order();
