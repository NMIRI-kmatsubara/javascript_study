const func1 = (num1) => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(num1);
        }, 3000);
    });
};

const func2 = (num2) => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            //console.log('func1_num:'+ num1);
            console.log('func2_num:'+ num2);
            console.log('func2_num*num:'+ num2*num2);
            resolve(num2 * num2);
        }, 2000);
    });
};

a = func1
console.log(a(5).then(func2))
 // .then(func2)
 // .then((result) => {
 //     console.log(result);
 // })
 // .catch((e) => {
 //     console.log(e);
 // });