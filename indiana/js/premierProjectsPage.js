$(function(){



	$.getJSON("js/json/indiana.json",function(data){

		
$.each(data.projectPage,function(key1,val1){
	$.each(val1,function(key2,val2){
		$("#bootHolder").append(`

			<div class="col-md-3 col-11 mt-3">
      <img id="${val2.jobTitle}" class="jobSelect" src="${val2.jobThumb}">
      <p>${val2.jobName}<br>  ${val2.manufacturer}</p>
    </div>

			`);

	});



});

$.each(data.projectPage,function(key1,val1){
$(".jobSelect").on("click",function(){
	

;
		let jobSelection = $(this).attr("id");
		$.each(val1,function(key2,val2){

			if(jobSelection==key2){
				$("#jobCallout").append(val2.jobName);
				$("#companyCallOut").append(val2.manufacturer);
			let projectImageCount=val2.photoAlbum.length;
			for(let imageCall = 0;imageCall<projectImageCount;imageCall++){
				if(imageCall==0){
              $('.carousel-indicators').append(' <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>');
              $('#carousel_sliders').append(` <div  class="carousel-item active"><img style="width:100%;" class="d-block " src="${val2.photoAlbum[imageCall]}" alt="First slide"><div class="carousel-caption"></div></div>`);  
            
            }else{
              $('.carousel-indicators').append(` <li data-target="#carouselExampleIndicators" data-slide-to="${imageCall}"></li>`);
              $('#carousel_sliders').append(` <div  class="carousel-item "><img style="width:100%;" class="d-block picSize" src="${val2.photoAlbum[imageCall]}" alt="${imageCall} slide"><div class="carousel-caption"></div></div>`); 

            }
			}
			
			}
		})
		
		$("#projectCaroHolder").css({display:"inline-block"});
	});


	});
$("#close").on("click",function(){
	
	$("#projectMainHolder").empty().append(`
		

  <div style="border: thin solid blue;  " id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
              <ol class="carousel-indicators">
               
              </ol>
              <div   id="carousel_sliders" class="carousel-inner">
               
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
             <div> <h3 id="jobCallout"></h3><h4 id="companyCallOut"></h4></div>

		`);
$("#projectCaroHolder").css({display:"none"});

});
		
	
});

});