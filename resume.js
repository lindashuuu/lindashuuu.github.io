"use strict";

(function() {



	window.onload=function(){
		$("wechat_icon").onclick=show_wechat;
		
		$("close_QR").onclick=closeWechat;
		
		$("project-background").onclick=closeProject;

		let list=$$(".column");
		console.log(list);
		for (let i=0;i<list.length;i++){
			list[i].onclick=showInfo;
		}
		
	}
	function closeProject(){
		let container=$("close_project");
		container.classList.add("hidden");
		container.removeChild($("project_info"));

		$("project-background").classList.remove("overlay");
	}
	function showInfo(){
		
		let container=$("close_project");
		container.classList.remove("hidden");
		let new_section=document.createElement("div");
		let new_header=document.createElement("h2");
		let new_info=document.createElement("p");
		new_section.id="project_info";
		
		new_section.appendChild(new_header);
		new_section.appendChild(new_info);
		new_section.classList.add("show_project");
		container.appendChild(new_section);
		new_section.onclick=closeProject;
		$("project-background").classList.add("overlay");
		ReadDemo(this);
		
	}

	function ReadDemo(obj){    
        switch (obj.id){
        	case "puzzle":{
        		fill_puzzle();
        		break;
        	}
        	case "search_engine":{
        		fill_engine();
        		break;
        	}
        	case "bookstore":{
        		fill_bookstore();
        		break;
        	}
        	case "insta":{
        		fill_insta();
        		break;
        	}

        	default:
        		return;
        	}
        }
    function fill_insta(){
    	$("project_info").firstChild.innerText="Going to github link";
    }
  	function fill_puzzle(){
  		let area=$("project_info");
  		area.getElementsByTagName('h2')[0].innerText="Web Page: Sliding Puzzle [JavaScript]";
  		area.getElementsByTagName('p')[0].innerText=("Built online Fifteen Puzzle by responding"+
  						"to DOM events. Developed web page in HTML and"+
								"styled with CSS layout\n"+
						"Manipulated DOM tree and style properties through JavaScript");

  	}
  	function fill_engine(){
  		let area=$("project_info");
  		area.getElementsByTagName('h2')[0].innerText="Search Engine [Python]";
  		area.getElementsByTagName('p')[0].innerText=("Implemented a search engine with GUI that can rank the relevant links from ics.uci.edu. in a\n" + 
													"team of two\n" + 
													"Tokenized raw webpages by using nltk to eliminate stop words and reduce the variations of\n" + 
													"words to a common stem\n" + 
													"Calculated importance of documents and query based on tf-idf and ranked them in terms of\n" + 
													"cosine similarity between vectors and Optimized running speed using heap");

  	}
  	function fill_bookstore(){
  		let area=$("project_info");
  		area.getElementsByTagName('h2')[0].innerText="Web Page: GoodRead [JavaScript, PHP, SQL]";
  		area.getElementsByTagName('p')[0].innerText=("Displayed list of book I have read and could display the specific information by clicking on the\n" + 
														"book.\n" + 
														"Used PHP to retrieve data from SQL and returned data in JSON\n" + 
														"Used JavaScript (Ajax fetch) to retrieve JSON from server and injected into the HTML page");

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
    	return document.querySelectorAll(id);
    }



})();