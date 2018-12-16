


$(document).ready(function(){

 $("w-div input").attr("style", "height:52px !important");

$("#learn-more").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: "740px"
    }, 800);
});


var currentScrollPosition=0;
	window.addEventListener("scroll", function (event) {
	    var scroll = this.scrollY;
	    
	     $("w-div input").attr("style", "height:52px !important");
	    if (scroll> 500){
	    	$(".navbar").removeClass("bg-transparent");
	    	$(".navbar").addClass("bg-peach");
	    } else {
	    	$(".navbar").addClass("bg-transparent");
	    	$(".navbar").removeClass("bg-peach");
	    }

	    if (scroll < currentScrollPosition ){
	    	$(".navbar").removeClass("compressed");
	    	currentScrollPosition = scroll;

	    } else {
	    	

	    	$(".navbar").addClass("compressed");
	    	currentScrollPosition = scroll;

	    }
	    
	});



var pillowGifPaths = ["img/pillow-gif1.jpg","img/pillow-gif2.jpg","img/pillow-gif3.jpg"]
var currentPathNum = 0;
setInterval(function() {

	currentPathNum = (currentPathNum + 1) % pillowGifPaths.length;
	$("#pillow-gif").attr("src",pillowGifPaths[currentPathNum]);
	},2000);





});

