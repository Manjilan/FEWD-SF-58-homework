$('.fa-toggle-on').on('click', function(){
 $(".fixed-background i").toggleClass("fa-flip-horizontal");
 $("header").toggleClass("change");
});
$('#showModal').on('click', function(){
	$('.modal').css('display', 'flex').hide().fadeIn();
});

$('#close').on('click', function(){
	$('#close').text('Thanks');
	$('.modal').fadeOut();
});