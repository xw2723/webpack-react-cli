//如果在 js中使用expose加载器
// 这里 jquery 作为模块名 ，jQuery为输出变量名
// import $ from "expose?$!jquery";

//最后在main.js 使用
import $ from "jquery";

window.jQuery = window.$ = $;

/**
 * jquery包装类
 * 在这里进行jquery扩展
 */
/**
 * ajax 重写
 * @param {Object} $
 */
(function($){
	var _ajax=$.ajax;

	$.ajax=function(opt){
		//添加随机数，防止换成
		var nowTime = new Date().getTime();
		if(opt.url.indexOf("?")>=0){
			opt.url += "&"+nowTime;
		}else{
			opt.url += "?"+nowTime;
		}
		
		var fn = {
			beforeSend: function(XMLHttpRequest){},
			error: function(XMLHttpRequest, textStatus, errorThrown){},
			success: function(data, textStatus){},
			complete: function(XMLHttpRequest, textStatus){}
		};
		
		if(opt.beforeSend) fn.beforeSend=opt.beforeSend;
		if(opt.error) fn.error=opt.error;
		if(opt.success) fn.success=opt.success;
		if(opt.complete) fn.complete=opt.complete;
		
		var btnLoading = null;
		if(opt.btnLoadingId){
			btnLoading = Ladda.create( document.getElementById(opt.btnLoadingId) );
		}
		
		var _opt = $.extend(opt,{
			beforeSend: function(XMLHttpRequest){
				if(opt.isLoading) $('#ajaxLoadingDialog').modal('show');
				if(opt.btnLoadingId) btnLoading.start();
				fn.beforeSend(XMLHttpRequest);
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				if(opt.isLoading) $('#ajaxLoadingDialog').modal('hide');
				if(opt.btnLoadingId) btnLoading.stop();
				fn.error(XMLHttpRequest, textStatus, errorThrown);
			},
			success:function(data, textStatus){
				fn.success(data, textStatus);
			},
			complete: function(XMLHttpRequest, textStatus){
				if(opt.isLoading){
				window.setTimeout(function(){
    				$('#ajaxLoadingDialog').modal('hide');
	    			},1000);
    			}
    			if(opt.btnLoadingId) {
    				window.setTimeout(function(){
					 	btnLoading.stop();
				 	}, 500);
    			}
    			fn.complete(XMLHttpRequest, textStatus);
    		}
		});
		_ajax(_opt);
	};
})(jQuery);

export default window.$;