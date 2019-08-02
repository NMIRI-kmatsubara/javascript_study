var asyncBuyApple = (payment, callback) => {
    setTimeout(() => {
        if(payment >= 150){
            callback(payment-150, null);
        }else{
            callback(null, '金額が足りません。');
        }
    }, 1000);
}

asyncBuyApple(500, (change, error) => {
    if(change !== null){
        console.log('お釣りは' + change + '円です。');
    }
    if(error !== null){
        console.log('エラーが発生しました：' + error);
    }
});
console.log('500円払いました。');