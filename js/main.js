$(function(){
    $(".manu__list-items, #body").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
    $('.manu__close, .manu__burger, .manu a').on('click', function()
    {$('.manu__list-items').toggleClass('manu__list-items-active');});

   
    

    var mixer = mixitup('.galery__content');});
$(function(){
$('.slide-blog__iner-text').slick({dots:true,
 arrows:false});});
              