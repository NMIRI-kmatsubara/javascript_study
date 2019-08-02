$(() => {
    $('a img').hover(() => {
       var value =  $('a img').attr('src');
       console.log(value);
       alert(value);

    })
})

$(() => {
    src = $('a img').attr('src');
    console.log('src:' + src)
})