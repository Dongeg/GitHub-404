$(function(){
	$(this).bind('mousemove',function(e){
			e = e||window.event; 
			var lineX = e.clientX/document.body.clientWidth*20;
			var lineY = e.clientY/document.body.clientHeight*10;
			//translate要在原来的基础上修改，所以要加上原来的偏移量，
			//因为要让动画有差异，所以要对lineX，lineY做修改
			$('.bg').css('transform','translate('+0+'px'+','+(lineY-41)+'px)');
			$('.cat').css('transform','translate('+(lineX-94)+'px'+','+(lineY-115)+'px)');
			$('.cat-shadow').css('transform','translate('+(lineX*1.2-83)+'px'+','+(lineY*1.2+85)+'px)');
			$('.error').css('transform','translate('+(lineX*1.5-380)+'px'+','+(lineY*1.2-135)+'px)');
			$('.airship').css('transform','translate('+(lineX-11)+'px'+','+(lineY-63)+'px)');
			$('.airship-shadow').css('transform','translate('+(lineX*1.2-5)+'px'+','+(lineY*1.2+54)+'px)');
			$('.house1').css('transform','translate('+(-lineX*2+371)+'px'+','+(-lineY*1.5-71)+'px)');
			$('.house2').css('transform','translate('+(-lineX+39)+'px'+','+(-lineY-129)+'px)');
			
	});
});