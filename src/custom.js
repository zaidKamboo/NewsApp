$(document).ready(function () {
    console.log($('.card').html());
    $('.card img').on('click', function(){
        console.log(`Clicked on :${$(this).attr('src')}`);
    });
});