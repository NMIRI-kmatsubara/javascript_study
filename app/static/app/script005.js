var Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

};

Member.prototype = {
    getName : function() {
        return this.lastName + ' ' + this.firstName;
    },
    toString : function() {
        return this.lastName + this.firstName;
    }
};

var women = new Member('涼風', '青葉');

console.log(women.getName());
console.log(women.toString());