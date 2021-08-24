$(document).ready(function() {
	$('.header__burger').click(function(event) {
			$('.header__burger,.navigation').toggleClass('active');
         $('.burger__btn').toggleClass('close');      
	});

      $('.js-hovered-card').hover(function(event) {
      $(this).toggleClass('active');
   });
  
   

});


   




