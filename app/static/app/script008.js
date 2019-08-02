let i = 0;
let member = {
    name : '涼風青葉',
    birth : new Date(2000, 3, 10),
    ['memo' + ++i] : '正規会員',
    ['memo' + ++i] : 'キャラデザイナー',
    ['memo' + ++i] : '新入社員',

};

console.log(member)

//var current = new Date();
//var result = document.getElementById('result');
//result.textContent = current.toLocaleDateString();

