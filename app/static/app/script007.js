class Member {
    //コンストラクタ
    constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    }

    getName() {
        return this.lastName + this.firstName;
    }
}

class BusinessMember extends Member {
    //引数にclazzを追加
    constructor(firstName, lastName, clazz) {
        super(firstName, lastName);
        this.clazz = clazz;
    }

    getName() {
        return super.getName() + '/役職：' + this.clazz;
    }
    work() {
        return this.getName() + 'は働いています。';
    }
}



let m = new BusinessMember('涼風', '青葉', 'キャラクターデザイナー');

myName = m.getName()
console.log(myName)

let member = {
    name : '涼風青葉',
    birth : new Date(2000,4,10),
    toString() {
        return this.name + '/誕生日：' + this.birth.toLocaleDateString()
    }
};

console.log(member.toString());


x = Math.sqrt(2)
console.log(x)

var ary = new Array('佐藤', '高江', '永田');
//var ary = new Array();
//var ary = new Array(10);

console.log(ary.length)