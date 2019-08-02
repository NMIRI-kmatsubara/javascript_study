var result = new Promise(function(resolve) {

    resolve(new Date);

})

result.then( function(data){
    console.log(data.getFullYear());
});