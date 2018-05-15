"use strict";

//create short cut
function $(id){
	return document.getElementById(id);
}
function qs(selector){
	return document.querySelectorAll(selector);
}


window.onload = function(){
	setupTabs();
};

function setupTabs() {
	let tabs = document.getElementById("tabs").children;
	for(let i=0; i<tabs.length; i++) {
		let element = tabs[i];
		element.onmouseover = tabsMouseOver;
		element.onmouseout = tabsMouseOut;
		element.onclick = tabsClicked;
		if(element.classList.contains("clicked")) {
			element.style.color = "#b30047";
		} else {
			element.style.color = "#BBBBBB";
		}
	}
}

function tabsMouseOver() {
	this.classList.add("hovered");
	this.style.color = "#FFFFFF";
}

function tabsMouseOut() {
	let classList = this.classList;
	classList.remove("hovered");
	if(classList.contains("clicked")) {
		this.style.color = "#b30047";
	} else {
		this.style.color = "#BBBBBB";
	}
}

function tabsClicked() {
	let path = this.innerText.toLowerCase();
	if(path == "home") {
		path = "index";
	}
	path += ".html"
	window.location.href = path;
}