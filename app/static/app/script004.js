var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function(){
        return this.firstName + this.lastName;
    }
};

var women = new Member('涼風', '青葉');

console.log(women.getName())



