let flag = false;
$('.hamburger').click(function(){
	if(!flag){
		$('.header__nav__a').slideDown();
	}else{
		$('.header__nav__a').slideUp();
	}
	flag = !flag
})