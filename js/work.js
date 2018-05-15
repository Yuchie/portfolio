/*
Name: Yuqian Sun
Date: 10.22.2017
Section: CSE 154 AD

This is the work.js page for my portfolio of Creative Project.
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
		let works = qs(".work");
		for(let i=0; i<works.length; i++){
			works[i].onclick = worksClicked;
		}
		setupTabs();
	};

	function worksClicked() {
		$("works").className = "filter";
		if(!this.classList.contains("workclicked")){
			this.classList.add("workclicked");
		}
		if (this.id === "work1"){
			showWork1();
		}else if (this.id === "work2"){
			showWork2();
		}else if (this.id === "work3"){
			showWork3();
		}
	}

	function showWork1() {
		let newWindow = document.createElement("div");
		newWindow.className = "newWindow";

		let image = document.createElement("div");
		let img = document.createElement("img");
		img.src = "img/works/work1/work.jpg";
		let contents = document.createElement("div");
		let title = document.createElement("h2");
		title.innerHTML = "Shy Teddy";
		let explanation = document.createElement("p");
		explanation.innerHTML = "This teddy bear looks like a general teddy doll.<br>" +
		"But actually, he can move.<br>" +  
		"He is just so shy that only moves when no one sees him.";
		newWindow.append(image);
		newWindow.append(contents);
		image.append(img);
		contents.append(title);
		contents.append(explanation);
		qs(".main")[0].appendChild(newWindow);

	}

	function showWork2() {
		let newWindow = document.createElement("div");
		newWindow.className = "newWindow";

		let image = document.createElement("div");
		let img = document.createElement("img");
		img.src = "img/works/work2/work1.png";
		let contents = document.createElement("div");
		let title = document.createElement("h2");
		title.innerHTML = "Clocky Nikkie";
		let explanation = document.createElement("p");
		explanation.innerHTML = "Nikkie was named after \"Nikki\", diary in Japanes.<br>" +
		"People lives with smartphone and smartphone can be said partner for them.<br>" +  
		"Clocky Nikkie is an application which gives life, \"Nikkie\", to smartphone.<br>" +
		"Nikkie has a regular routine and sleep very early<br>" +
		"When your partner fells a sleep, can you wake him up?<br>" +
		"This application intends to prevent people wake until late at night because of smartphone.";
		newWindow.append(image);
		newWindow.append(contents);
		image.append(img);
		contents.append(title);
		contents.append(explanation);
		qs(".main")[0].appendChild(newWindow);

	}

	function showWork3() {
		let newWindow = document.createElement("div");
		newWindow.className = "newWindow";

		let image = document.createElement("div");
		let img = document.createElement("img");
		img.src = "img/works/work3/work.jpg";
		let contents = document.createElement("div");
		let title = document.createElement("h2");
		title.innerHTML = "Diminishing Voice";
		let explanation = document.createElement("p");
		explanation.innerHTML = "What happens when you can't hear some of the phonemes?<br>" +
		"<br>" +  
		"Diminishing Voice looks voice as an water and store in the barrel.<br>" +
		"Pour the words by saying toward the mike.<br>" +
		"The phonemes are flowing out by pulling out the plugs.<br>" +
		"Then turn the faucet to listen what happens to the words you said.<br>" +
		"Is it still possible to realize the words?";
		newWindow.append(image);
		newWindow.append(contents);
		image.append(img);
		contents.append(title);
		contents.append(explanation);
		qs(".main")[0].appendChild(newWindow);
	}

})();