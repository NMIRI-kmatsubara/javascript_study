function sum() {
    result = 0;

    //与えられた引数を順番に取り出し、順に加算処理
    for (var i=0,len = arguments.length; i<len; i++){
            var tmp = arguments[i];
            if(typeof tmp !== 'number'){
                throw new Error('引数が数値ではありません：' + tmp);
            }

            result += tmp
        }
        return result;

    }

    try {
        console.log('合計値は:'+sum(5,6,7,8,9,10));
    }catch(e) {
        window.alert(e.message);
}