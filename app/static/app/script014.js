var syncBuyApple = (payment) => {
    if(payment >= 150){
        return {change:payment-150, error:null};
    }else{
        return {change:null, error:150-payment + '円足りません。'}
    }
}

var result = syncBuyApple(500);

console.log('500円払いました。');
if(result.change !== null){
    console.log('お釣りは'+result.change +'円です。');
}
if(result.error !==null){
    console.log('エラーが発生しました：' + result.error);
}