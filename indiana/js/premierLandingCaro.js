$(function(){
	$.getJSON("js/json/indiana.json",function(data){

		const landingPageData = data.landingProjects;
		const landingImageCount = landingPageData.length;
		//console.log(landingPageData[1].heroShot);


		for(let caroImages = 0;caroImages<landingImageCount;caroImages++){


			console.log(landingPageData[caroImages].heroShot);
			if(caroImages==0){
              $('.carousel-indicators').append(' <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>');
              $('#carousel_sliders').append(` <div  class="carousel-item active"><img class="d-block " src="${landingPageData[caroImages].heroShot}" alt="First slide"><div class="carousel-caption"><h4>${landingPageData[caroImages].projectName}</h4></div></div>`);  
            
            }else{
              $('.carousel-indicators').append(` <li data-target="#carouselExampleIndicators" data-slide-to="${caroImages}"></li>`);
              $('#carousel_sliders').append(` <div  class="carousel-item "><img class="d-block picSize" src="${landingPageData[caroImages].heroShot}" alt="${caroImages} slide"><div class="carousel-caption"><h4>${landingPageData[caroImages].projectName}</h4></div></div>`); 

            }
		}

	});


});