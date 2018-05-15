/*
Name: Yuqian Sun
Date: 10.22.2017
*/
"use strict";


(function() {

	//create short cut
	function $(id){
		return document.getElementById(id);
	}
	function qs(selector){
		return document.querySelectorAll(selector);
	}

	window.onload = function() {
		setupTabs();
		setupModal();
	};

	function setupModal() {
		let works = qs(".work");
		for(let i=0; i<works.length; i++){
			works[i].onclick = worksClicked;
		}
		let button = $("closeModalButton");
		button.onclick = closeModal;
	}
	
	function worksClicked() {
		let pathToData = "img/works/" + this.id + "/data.json";
		jQuery.getJSON(pathToData, function(data) {
			createModalContents(data);
		});
	}

	function createModalContents(data) {
		$("worktitle").innerHTML = data.name;
		$("workimage").src = data.img;
		$("explanation").innerHTML = data.explanation;
		
		let modal = $("workModal");
		modal.style.display = "block";
	}
	
	function closeModal() {
		let modal = $("workModal");
		modal.style.display = "none";
	}

})();