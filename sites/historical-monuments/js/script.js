// Slider .............
	var sl_enable=1, i = 0;
	var slider_content = new Array(), path = new Array(), grid = new Array();

	// Listing slider content
	slider_content[0] = document.getElementById("slide_text1");
	slider_content[1] = document.getElementById("slide_text2");
	slider_content[2] = document.getElementById("slide_text3");
	slider_content[3] = document.getElementById("slide_text4");
	slider_content[4] = document.getElementById("slide_text5");
	slider_content[5] = document.getElementById("slide_text6");
	slider_content[6] = document.getElementById("slide_text7");
	slider_content[7] = document.getElementById("slide_text8");
	
	// Listing slider images
	path[0] = "img/slider/img1-1140x600.jpg";
	path[1] = "img/slider/img2-1140x600.jpg";
	path[2] = "img/slider/img3-1140x600.jpg";
	path[3] = "img/slider/img4-1140x600.jpg";
	path[4] = "img/slider/img5-1140x600.jpg";
	path[5] = "img/slider/img6-1140x600.jpg";
	path[6] = "img/slider/img7-1140x600.jpg";
	path[7] = "img/slider/img8-1140x600.jpg";
	
	// Listing grid images
	grid[0] = document.grid1;
	grid[1] = document.grid2;
	grid[2] = document.grid3;
	grid[3] = document.grid4;
	grid[4] = document.grid5;
	grid[5] = document.grid6;
	grid[6] = document.grid7;
	grid[7] = document.grid8;
	
	window.onload = my_slider;
	
	
	
	// content collapse or expand function
	// for wonder1
	$('.SeeMore1').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore1');
		if($this.hasClass('SeeMore1')){
			$this.text('Read more');			
		} else {
			$this.text('collapse');
		}
	});
	// for wonder2
	$('.SeeMore2').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore2');
		if($this.hasClass('SeeMore2')){
			$this.text('Read more');			
		} else {
			$this.text('collapse');
		}
	});
	// for wonder3
	$('.SeeMore3').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore3');
		if($this.hasClass('SeeMore3')){
			$this.text('Read more');			
		} else {
			$this.text('collapse');
		}
	});
	// for wonder4
	$('.SeeMore4').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore4');
		if($this.hasClass('SeeMore4')){
			$this.text('Read more');			
		} else {
			$this.text('collapse');
		}
	});
	// for wonder5
	$('.SeeMore5').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore5');
		if($this.hasClass('SeeMore5')){
			$this.text('Read more');			
		} else {
			$this.text('collapse');
		}
	});
	
	
// go to top button function
window.addEventListener("scroll", custom_scroll);



// Gallery grid handlers
	var position = 0;
	document.getElementById("right").addEventListener("click", right_bt);
	document.getElementById("left").addEventListener("click", left_bt);

// change the main gallery image on click
	document.addEventListener("click", main_image(event));
	alert("success");