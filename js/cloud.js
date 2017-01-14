$(function(){
	 $(function(){
        $(".element").typed({
            strings: ["Hello!<br><br>欢迎来到我的个人主页.<br><br>我的名字叫王涛.<br><br>是一名前端工程师！<br><br>首先，点击右上角关掉这个窗口<br><br>技术不是目的,而是解决问题的一种手段<br><br>"],
            typeSpeed: 50,
            callback: function() {
            	$('.boxFleg').show().click(function(){
            		$('.box').hide();
            		$('#div1').show();
            	});
            }
        });
    });
})
