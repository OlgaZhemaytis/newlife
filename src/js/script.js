var animateButton = function(e) {

	e.preventDefault;
	//reset animation
	e.target.classList.remove('animate');
	
	e.target.classList.add('animate');
	setTimeout(function(){
	  e.target.classList.remove('animate');
	},700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
	bubblyButtons[i].addEventListener('click', animateButton, false);
  }

  $(window).on( 'scroll',function (){
	$(' .mov').each(function (){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass('animate__slideInLeft');
		}
	});
});

$(window).on('scroll',function() {
	if ($(this).scrollTop() > 100) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});

$("a[href^='#up']").on('click',function(){
	const _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
});
$("a[href^='#up']").on('click',function(){
	const _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
});


 $("a[href^='#about']").on('click',function(){
 	const _href = $(this).attr("href");
 	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
 	return false;
 });
 $("a[href^='#technology']").on('click',function(){
 	const _href = $(this).attr("href");
 	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
 	return false;
 });
 $("a[href^='#Skils']").on('click',function(){
 	const _href = $(this).attr("href");
 	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
 	return false;
 });
 $("a[href^='#Portfolio']").on('click',function(){
 	const _href = $(this).attr("href");
 	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
 	return false;
 });
 $("a[href^='#Contacts']").on('click',function(){
 	const _href = $(this).attr("href");
 	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
 	return false;
 });
 $(document).ready(function($) {

	$('#tabs').tabulous({
		effect: 'scale'
	});

	 $('#tabs2').tabulous({
		effect: 'slideLeft'
	});

	 $('#tabs3').tabulous({
		effect: 'scaleUp'
	});

	$('#tabs4').tabulous({
		effect: 'flip'
	});

});

$('ul.forme__tabs').on('click', 'li:not(.forme__tab__active)', function() {
	$(this)
	  .addClass('forme__tab__active').siblings().removeClass('forme__tab__active')
	  .closest('div.forme__wrapper').find('div.forme__item').removeClass('forme__item__active').eq($(this).index()).addClass('forme__item__active');
});

function toggleSlide(item) {
	$(item).each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.forme__item').eq(i).toggleClass('forme__item__active');
			// $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	});
};


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})
