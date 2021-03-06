$(document).ready(function(){
 
	$('.go-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.go-up').slideDown(300);
		} else {
			$('.go-up').slideUp(300);
		}
	});
 
});

var videoWatched = false;

function setVideoWatched(){
    console.log('Video watched')
    videoWatched = true;
}

window.onload = setTimeout(function(){
    if (!videoWatched) {
        if (confirm('Você quer saber mais sobre a Distribuição Física na Logística?')) {
            $('#video1').modal()
        }
    }
}, 10000); //Ten seconds