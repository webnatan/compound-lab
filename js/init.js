$(document).ready(function() {	
	
	$('nav a').on('click', function(event){     
		event.preventDefault();		
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
		$('nav a').removeClass("ativo");
		$(this).addClass("ativo");
	});

/*$('.slider').boutique({
container_width: 'auto',
front_img_width: 350,
front_img_height: 'auto',
variable_container_height: true,
frames: 3, 
});
	

$('.slider').boutique({
container_width: 'auto',
starter:	3,
speed:	900,
hovergrowth:	0.2,
behind_opacity:	0.5,
back_opacity:	0.2,
behind_size:	0.6,
back_size:	0.4,
autoplay:	true,
autoplay_interval:	4000,
freescroll:	false,
move_on_hover:	true,
frames: 3, 
});*/

});

