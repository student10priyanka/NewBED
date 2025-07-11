let products = [
    {
        name: "samsung",
        amount: 700000,
        quantity: 10
    },
    {
        name: "Iphone16",
        amount: 1000,
        quantity: 1
    }
];

let accountBalance = 2000;


function buyProduct(product_name, cb) {
    let isProduct = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === product_name) {
            isProduct = products[i];
        }
    }
    if (!isProduct) {
        cb("Product is not available", null);
    } else {
        cb(null, isProduct); 
    }
}

// Deduce amount
function deduceAmount(product) {
    if (accountBalance >= product.amount) {
        let remaining = accountBalance - product.amount;
        console.log("You have to pay: ₹" + product.amount);
        console.log("Remaining Balance: ₹" + remaining);
    } else {
        console.log("Not sufficient balance");
    }
}


buyProduct("Iphone16", function (err, product) {
    if (err) return console.log(err);
    console.log("Amount:", product.amount);
    console.log("Product is purchased");
    deduceAmount(product); 
});
