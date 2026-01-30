const myPromise = new Promise((resolve, reject) => {
    let marks = 33;
    if (marks >= 33) {
        resolve("You passed!");
    } else {
        reject("You failed!");
    }
})
const f1=async()=>{
    try{
        const msg =await myPromise;
        console.log(msg);

    }catch(error){
        console.log(error)
    }
}
// myPromise.then((msg) => console.log(msg)).catch((error) => console.log("some error occurred",error));
f1();//Arrow function are not hoisted means we have to call after declear it
