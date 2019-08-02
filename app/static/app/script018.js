$(() => {
    $('a img').hover(() => {
        $(this).attr('src',
        $(this).attr('src').replace('_off', '_on'));
    }, () => {
        if(!$(this).hasClass('currentPage')){
            $(this).attr('src',$(this).attr('src').replace('_on','_off'));
        }
    });
});