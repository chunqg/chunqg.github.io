$(document).ready(function() {
    $('.contact').fadeIn(1000)
});
$(document).ready(function() {
    $('main').fadeIn(1000);
});

$('.totop').on("click", function(){
    $('body, html').animate({scrollTop: 0}, 700);
});

$(".towork").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#work").offset().top
    }, 1000);
});

$('.box').on('mouseenter', function(){
    $(this).css('background-color', 'IndianRed');
    $(this).css('border-radius', '1em');
    $(this).css('opacity', '100%');
});
$('.box').on('mouseleave', function(){
    $(this).css('background-color', 'rgb(100, 144, 150)');
    $(this).css('border-radius', '2em');
    $(this).css('opacity', '100%');
});

$('.box-like').on('mouseenter', function(){
    $(this).css('background-color', 'IndianRed');
    $(this).css('border-radius', '1em');
});
$('.box-like').on('mouseleave', function(){
    $(this).css('background-color', 'rgb(98, 155, 122)');
    $(this).css('border-radius', '2em');
});

$('.box-like2').on('mouseenter', function(){
    $(this).css('background-color', 'IndianRed');
    $(this).css('border-radius', '3em');
});
$('.box-like2').on('mouseleave', function(){
    $(this).css('background-color', 'rgb(151, 127, 82)');
    $(this).css('border-radius', '2em');
});

$('.droite img').on('click', function(){
    var monImage = $(this).attr("src");
    $(".gauche img").attr("src", monImage);
});