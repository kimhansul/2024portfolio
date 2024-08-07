$(window).scroll(function(){
    var scTop = $(document).scrollTop();
    var mainOffset = $('#main').eq(0).offset();
    var aboutOffset = $('#about').eq(0).offset();
    var workOffset = $('#work').eq(0).offset();
    var contactOffset = $('#contact').eq(0).offset();

    if(scTop >= mainOffset.top && scTop < aboutOffset.top - 450){
        $('.navigation ul').eq(0).addClass('w_style');
        $('.navigation ul li').eq(0).addClass('on').siblings().removeClass('on');
        $('header').removeClass('w_style');
        $('header ul li a svg rect').css('stroke','#fff');
        $('header ul li a svg path').css('stroke','#fff');
    }
    else if(scTop >= aboutOffset.top - 450 && scTop < workOffset.top - 450){
        $('header').addClass('w_style');
        $('.navigation ul').eq(0).removeClass('w_style g_style');
        $('.navigation ul li').eq(1).addClass('on').siblings().removeClass('on');
        $('header ul li a svg rect').css('stroke','#1d1d1d');
        $('header ul li a svg path').css('stroke','#1d1d1d');
    }
    else if(scTop >= workOffset.top - 450 && scTop < contactOffset.top - 600){
        $('.navigation ul').eq(0).addClass('g_style');
        $('.navigation ul li').eq(2).addClass('on').siblings().removeClass('on');
        $('#contact .contact_wrap h2').removeClass('on');
    }
    else if(scTop >= contactOffset.top - 600){
        $('.navigation ul').eq(0).removeClass('w_style g_style');
        $('.navigation ul li').eq(3).addClass('on').siblings().removeClass('on');
        $('#contact .contact_wrap h2').addClass('on');
    }
    
    if(scTop >= mainOffset.top && scTop < aboutOffset.top){
        $('header ul li a').css('color','#fff');
    }
    else if(scTop >= aboutOffset.top){
        $('header ul li a').css('color','#1d1d1d');
    }
});

$('header ul li.fl a').click(function(){
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
});

$('.navigation ul li a').click(function(){
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 10}, 500);
});

var pagLeng = $('#work .work_list > div').length - 2;

for(var i = 0; i < $('#work .work_list > div').length; i++){
    $('#work .work_list > div').eq(i).css('z-index',$('#work .work_list > div').length - i);
}
$('#work button.slide_btn_right').click(function(){
    var pagNum = $('#work .work_list > div.pg_open').index();
    var nextPag = pagNum + 1;
    
    if(nextPag == pagLeng){
        $('#work button.slide_btn_right').addClass('hide');
    } else {
        $('#work button.slide_btn_right').removeClass('hide');
    }

    $('#work .work_list > div').eq(nextPag).addClass('pg_open').siblings().removeClass('pg_open');
    $('#work .work_list > div').eq(pagNum).css('z-index',pagNum);
    $('#work .work_list > div.pg_open').css({'transform':'perspective(2800px) rotateY(-180deg)','z-index':$('#work .work_list > div').length});

    if(nextPag > 0){
        $('#work button.slide_btn_left').removeClass('hide');
    }
});

$('#work button.slide_btn_left').click(function(){
    var pagNum = $('#work .work_list > div.pg_open').index();
    var prevPag = pagNum - 1;

    if(prevPag <= 0){
        $('#work button.slide_btn_left').addClass('hide');
    } else {
        $('#work button.slide_btn_left').removeClass('hide');
    }
    $('#work .work_list > div').eq(prevPag).addClass('pg_open').siblings().removeClass('pg_open');
    $('#work .work_list > div').eq(prevPag).css('z-index',$('#work .work_list > div').length);
    $('#work .work_list > div').eq(pagNum).css({'transform':'perspective(2800px) rotateY(0deg)','z-index':$('#work .work_list > div').length - pagNum});

    if(prevPag < pagLeng){
        $('#work button.slide_btn_right').removeClass('hide');
    }
});