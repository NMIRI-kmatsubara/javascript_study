var promiseBuyApple = function(payment) {
    return new Promise((resolve, reject) => {
        if(payment >= 150){
            resolve(payment-150);

        }else{
            reject('金額が足りません');
        }

    });
}

promiseBuyApple(400).then((change) => {
    console.log('お釣り' + change + '円です。');
}).catch((error) => {
    console.log('エラーが発生しました：' + error);

});

promiseBuyApple(400).then((change) => {
    console.log('お釣りは' + change + '円です。');
    return promiseBuyApple(change);
}).then((change) => {
    console.log('お釣りは' + change + '円です。');
    return promiseBuyApple(change);
}).then((change) => {
    console.log('お釣りは' + change + '円です。');
    return promiseBuyApple(change);
}).then((change) => {
    console.log('お釣りは' + change + '円です。');
    return promiseBuyApple(change);
}).then((change) => {
    console.log('お釣りは' + change + '円です。');
    return promiseBuyApple(change);
}).catch((error) => {
    console.log('エラーが発生しました：' + error);
});