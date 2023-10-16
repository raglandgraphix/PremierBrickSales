$(function(){


let windowState = {val:0};		

	$.getJSON("js/json/indiana.json",function(data){



//The code below removes whatever is inside of the navigation list and replaces it with the below. 

	
	function setPage(){
		const pageWidth = $(window).width();
		if(pageWidth<600){
			$("#navigationList").empty().append(`

			<p id="myMenu">MENU<p>
      			<div id="menu">
        		<div id="products" class="navigationClass">
          			<p id="productsOpen">PRODUCTS</p>
          			<ul id="productSel">
          				<li id="fb" class="productClick">
          				FACE BRICK
          				</li>
          				<li id="tb" class="productClick">
          					THIN BRICK          					
          				</li>
          				<li id="pv" class="productClick">
          					PAVERS
          				</li>
          				<li id="sb" class="productClick">
          					STRUCTURAL BRICK
          				</li>
          			</ul>
        		</div>        
        		<div id="contacts" class="navigationClass">
          			<p>CONTACTS</p>
        		</div>
        		<div id="location" class="navigationClass">
          			<p >LOCATION</p>
        		</div>
        		<div id="projects" class="navigationClass">
          			<p>PROJECTS</p>
        		</div> 
      		</div>
      		</div>

			`);
			windowState.val=1;
		}else{

			$("#navigationList").empty().append(`
					
      			<div id="navHolder">
      			<div id="products" class="navigationClass">
          			<p id="productsOpen">PRODUCTS |</p>
          			<ul id="productSel">
          				<li id="fb" class="productClick">
          				FACE BRICK
          				</li>
          				<li id="tb" class="productClick">
          					THIN BRICK          					
          				</li>
          				<li id="pv" class="productClick">
          					PAVERS
          				</li>
          				<li id="sb" class="productClick">
          					STRUCTURAL BRICK
          				</li>
          			</ul>
          		</div>        
      			<div id="contacts" class="navigationClass">
          			<p>CONTACTS |</p>
        		</div>
        		<div id="location" class="navigationClass">
          			<p >LOCATION |</p>
        		</div>
        		<div id="projects" class="navigationClass">
          			<p>PROJECTS </p>
        		</div> 
      			</div>
        		
        		
        		
        		
      		

			`);
			windowState.val=0;
		}


	}	
	setPage();
		
		

		


		let prodHeight = $("#productSel").height();
		
		$("#productSel").css({"height":"0px"});
		let prodState = {val:0};
		const navProduct = function(){
			 
				if(prodState.val==0){
				$("#productSel").animate({"height":prodHeight});
				prodState.val=1;
				
			}else{
				$("#productSel").animate({"height":"0px"});
				prodState.val=0;

			}

			
			

		
		}
		$("#productsOpen").on("click",function(){
			navProduct();
	});


		
		

		const menuState = {value:0};
	$("#myMenu").on("click",function(){
		if(menuState.value==0){
			$("#menu").animate({height:"600px"},500);
			menuState.value=1;
		}else{
			$("#menu").animate({height:"0px"},500);
			menuState.value=0;
			$("#productSel").animate({height:"0px"},500);
			prodState.val=0;
		};

	});

$("#premierLogo").on("click",function(){
		window.open("/","_self");
	});
	

	$(".navigationClass").on("click",function(){
		let locationLink = $(this).attr("id");
		switch(locationLink){
		
		case "contacts" : window.open("contacts.html","_self");
			break;
		case "projects": window.open("projects.html","_self");
			break;
		case "location": window.open("location.html","_self");
			break;
		}
	

	});
	$(".productClick").on("click",function(){
		let productPick = $(this).attr("id");
		switch(productPick){
		case "fb": window.open("faceBrick.html","_self");
			break;
		case "tb":window.open("thinBrick.html","_self");
			break;
		case "pv":window.open("pavers.html","_self");
			break;
		case "sb":window.open("structuralBrick.html");
			break;
		}

	});





	});

	$(window).on('resize',function(){
			let currentPageWidth = $(window).width();
			if (currentPageWidth<600 && windowState.val===0){
				$("#navigationList").empty().append(`

			<p id="myMenu">MENU<p>
      			<div id="menu">
        		<div id="products" class="navigationClass">
          			<p id="productsOpen">PRODUCTS</p>
          			<ul id="productSel">
          				<li id="fb" class="productClick">
          				FACE BRICK
          				</li>
          				<li id="tb" class="productClick">
          					THIN BRICK          					
          				</li>
          				<li id="pv" class="productClick">
          					PAVERS
          				</li>
          				<li id="sb" class="productClick">
          					STRUCTURAL BRICK
          				</li>
          			</ul>
        		</div>        
        		<div id="contacts" class="navigationClass">
          			<p>CONTACTS</p>
        		</div>
        		<div id="location" class="navigationClass">
          			<p >LOCATION</p>
        		</div>
        		<div id="projects" class="navigationClass">
          			<p>PROJECTS</p>
        		</div> 
      		</div>
      		</div>

			`);
			let prodHeight = $("#productSel").height();
			$("#productSel").css({"height":"0px"});
			let prodState = {val:0};
		const navProduct = function(){
			 
				if(prodState.val==0){
				$("#productSel").animate({"height":prodHeight});
				prodState.val=1;
				
			}else{
				$("#productSel").animate({"height":"0px"});
				prodState.val=0;

			}

			
			

		
		}
		$("#productsOpen").on("click",function(){
			navProduct();
	});

const menuState = {value:0};
	$("#myMenu").on("click",function(){
		if(menuState.value==0){
			$("#menu").animate({height:"600px"},500);
			menuState.value=1;
		}else{
			$("#menu").animate({height:"0px"},500);
			menuState.value=0;
			$("#productSel").animate({height:"0px"},500);
			prodState.val=0;
		};

	});
			windowState.val=1;
			$("#premierLogo").on("click",function(){
		window.open("/","_self");
	});
	

	$(".navigationClass").on("click",function(){
		let locationLink = $(this).attr("id");
		switch(locationLink){
		
		case "contacts" : window.open("contacts.html","_self");
			break;
		case "projects": window.open("projects.html","_self");
			break;
		case "location": window.open("location.html","_self");
			break;
		}
	

	});
	$(".productClick").on("click",function(){
		let productPick = $(this).attr("id");
		switch(productPick){
		case "fb": window.open("faceBrick.html","_self");
			break;
		case "tb":window.open("thinBrick.html","_self");
			break;
		case "pv":window.open("pavers.html","_self");
			break;
		case "sb":window.open("structuralBrick.html");
			break;
		}

	});		
	




			}else if(currentPageWidth>600 && windowState.val===1){
				$("#navigationList").empty().append(`
					
      			<div id="navHolder">
      			<div id="products" class="navigationClass">
          			<p id="productsOpen">PRODUCTS |</p>
          			<ul id="productSel">
          				<li id="fb" class="productClick">
          				FACE BRICK
          				</li>
          				<li id="tb" class="productClick">
          					THIN BRICK          					
          				</li>
          				<li id="pv" class="productClick">
          					PAVERS
          				</li>
          				<li id="sb" class="productClick">
          					STRUCTURAL BRICK
          				</li>
          			</ul>
          		</div>        
      			<div id="contacts" class="navigationClass">
          			<p>CONTACTS |</p>
        		</div>
        		<div id="location" class="navigationClass">
          			<p >LOCATION |</p>
        		</div>
        		<div id="projects" class="navigationClass">
          			<p>PROJECTS </p>
        		</div> 
      			</div>
        		
        		
        		
        		
      		

			`);
			let prodHeight = $("#productSel").height();
			$("#productSel").css({"height":"0px"});
			let prodState = {val:0};
		const navProduct = function(){
			 
				if(prodState.val==0){
				$("#productSel").animate({"height":prodHeight});
				prodState.val=1;
				
			}else{
				$("#productSel").animate({"height":"0px"});
				prodState.val=0;

			}

			
			

		
		}
		$("#productsOpen").on("click",function(){
			navProduct();
	});

const menuState = {value:0};
	$("#myMenu").on("click",function(){
		if(menuState.value==0){
			$("#menu").animate({height:"600px"},500);
			menuState.value=1;
		}else{
			$("#menu").animate({height:"0px"},500);
			menuState.value=0;
			$("#productSel").animate({height:"0px"},500);
			prodState.val=0;
		};

	});
			windowState.val=0;
			$("#premierLogo").on("click",function(){
		window.open("/","_self");
	});
	

	$(".navigationClass").on("click",function(){
		let locationLink = $(this).attr("id");
		switch(locationLink){
		
		case "contacts" : window.open("contacts.html","_self");
			break;
		case "projects": window.open("projects.html","_self");
			break;
		case "location": window.open("location.html","_self");
			break;
		}
	

	});
	$(".productClick").on("click",function(){
		let productPick = $(this).attr("id");
		switch(productPick){
		case "fb": window.open("faceBrick.html","_self");
			break;
		case "tb":window.open("thinBrick.html","_self");
			break;
		case "pv":window.open("pavers.html","_self");
			break;
		case "sb":window.open("structuralBrick.html");
			break;
		}

	});		
	

				
			}
					
				


		});





});