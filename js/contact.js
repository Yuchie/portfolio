/*
Name: Yuqian Sun
Date: 10.22.2017
*/

"use strict";

(function() {

	function $(id){
		return document.getElementById(id);
	}

	function submitClicked(){
		let mail = $("mail");
		let mailcontents = $("mailcontents");
		if(mailcontents.className == "default"){
			alert("There is no content!!");
		}else{
			if(mail.value == ""){
				alert("You must fill your mail address!");
			}else{
				mail.value = "";
				mailcontents.value = "Type your comments here.";
				mailcontents.className = "default";
				alert("You submit it!");
			}
		}
	}

	function mailcontentsClicked(){
		let mailcontents = $("mailcontents");
		if(mailcontents.className == "default"){
			mailcontents.value = "";
			mailcontents.className = "input";
		}
	}


	window.onload = function(){
		let submit = $("submit");
	    let mailcontents = $("mailcontents");
	    submit.onclick = submitClicked;
	    mailcontents.onclick = mailcontentsClicked;
	};

})();