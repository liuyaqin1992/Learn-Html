$(".level1 > a").click(function() {
	$(this).addClass("current")	//给当前元素添加样式
	.next().show()				//下一个元素显示
	.parent().siblings().children("a").removeClass("current")
	//父元素的同辈的子元素<a>移除“curren”样式
	.next().hide();				//它们下一个元素隐藏
	return false;
});