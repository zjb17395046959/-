'use strict';

/**
 * 创建一个瀑布流的布局
 * ele 是传递过来的元素，如ID，class等
 * options是传递过来的图片的路径
 * */
function Test(ele, options) {
	var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

	var box = document.querySelector(ele);

	img();
	s();
	//接受图片的路径并创建img标签
	function img() {
		for (var i = 0; i < options.length; i++) {
			var img = document.createElement('img');
			img.setAttribute('class', 'img');
			img.setAttribute('src', './img/' + (i + 1) + '.jpg');
			//设置图片的宽度都是一样的，高度自适应
			img.style.cssText = 'width:' + width + 'px;\n\t\t\tposition:absolute;';
			box.appendChild(img);
		}
	}
	//计算每行图片显示的个数
	function s() {
		//获取当前整个大盒子的宽度
		var box_width = window.getComputedStyle(box).width;
		//一行显示多少个图片=整体宽度/每张图片的宽度加左右距离
		// var row_num=parseInt((box_width/(width+20));
		console.log(box_width);
	}
}
