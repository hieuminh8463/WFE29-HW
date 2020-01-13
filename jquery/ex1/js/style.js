$(document).ready(function(){
	var h3slide = $('h3');
	var contentslide = $('.content');
	var next = $('#next');
	var prev = $('#pre');
	var numbSide = 0;
	next.click(function(){
		if($('input').val().length == 0)
		{
			$('#s1').css('background-color','#FF3111');
			$('#s1').css('color','#fff');
			$('.sss').append('<span>This field is required</span>');
			$('input').css('background-color','#FBE3E4');
			$('input').eq(6).css('background-color','#fff');
			$('.sss').eq(6).children().css('display','none');
		}
		else
		{
			numbSide++;
			for(var i = 0; i < h3slide.length; i++) {
				h3slide[i].style.background="#9DC8E2";
				h3slide[i].style.color="#fff";
			}
			for(var i = 0; i < contentslide.length; i++) {
				contentslide[i].style.display="none";
			}

			if(numbSide < 1) {
				numbSide = h3slide.length;
				numbSide = contentslide.length;
			}
			if(numbSide > h3slide.length && numbSide > contentslide.length) {
				numbSide = 1;
			}
			h3slide[numbSide-1].style.background="#2184BE";
			contentslide[numbSide-1].style.display="block";
		}
	});
	// content 1
	$('#user').blur(function(){
		if($('#user').val().length > 0)
		{
			$('.sss').eq(0).children().css('display','none');
			$('#user').css('background-color','#fff');
		}
		else
		{
			$('#s1').css('background-color','#FF3111');
			$('#s1').css('color','#fff');
			$('.sss').eq(0).append('<span>This field is required</span>');
			$('#user').css('background-color','#FBE3E4');
		}
	});
	$('#pass').blur(function(){
		if($('#pass').val().length > 0)
		{
			$('.sss').eq(1).children().css('display','none');
			$('#pass').css('background-color','#fff');
		}
		else
		{
			$('#s1').css('background-color','#FF3111');
			$('#s1').css('color','#fff');
			$('.sss').eq(1).append('<span>This field is required</span>');
			$('#pass').css('background-color','#FBE3E4');
		}
	});
	$('#repass').blur(function(){
		if($('#repass').val().length > 0)
		{
			if($('#repass').val() != $('#pass').val())
			{
				$('.sss').eq(2).children().css('display','none');
				$('.sss').eq(2).append('<span>Please enter the same value again</span>');
				$('#repass').css('background-color','#FBE3E4');
			}
			else
			{
				$('.sss').eq(2).children().css('display','none');
				$('#repass').css('background-color','#fff');
			}
		}
		else
		{
			$('#s1').css('background-color','#FF3111');
			$('#s1').css('color','#fff');
			$('.sss').eq(2).append('<span>This field is required</span>');
			$('#repass').css('background-color','#FBE3E4');
		}
	});
});