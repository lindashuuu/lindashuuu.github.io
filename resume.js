"use strict";

(function() {



	window.onload=function(){
		$("wechat_icon").onclick=show_wechat;
		
		$("close_QR").onclick=closeWechat
	}

	function closeWechat(){
		this.classList.remove("overlay");
		$("wechat_QR").classList.remove("QR_show");
		$("close_QR").classList.add("hidden");
	}
	function show_wechat(){
		$("close_QR").classList.remove("hidden");
		$("black-background").classList.add("overlay");
		
	
		$("wechat_QR").classList.add("QR_show");
	}

	function $(id) {
      return document.getElementById(id);
    }

    function $$(id){
    	return document.querySelector(id);
    }



})();