const myPromise = new Promise((resolve, reject) => {
    let marks = 33;
    if (marks >= 33) {
        resolve("You passed!");
    } else {
        reject("You failed!");
    }
});

const f1 = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error", error);
    }
};

// myPromise.then(msg => console.log(msg))
//          .catch(error => console.log("some error occurred", error));

f1(); 
