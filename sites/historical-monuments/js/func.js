// Home page slider
function my_slider() {
	
	if(sl_enable == 1) {
		
		document.slider_image.src = path[i];
		
		// Grid opacity & slider content
		if( i == 0 ) {
			grid[grid.length-1].style.opacity = ".3";
			grid[i].style.opacity = "1";
			
			slider_content[slider_content.length-1].style.display = "none";
			slider_content[i].style.display = "block";
		} else {
			grid[i-1].style.opacity = ".3";
			grid[i].style.opacity = "1";
			
			slider_content[i-1].style.display = "none";
			slider_content[i].style.display = "block";
		}
		
		if( i < path.length-1 ) {
			i++;
		} else {
			i = 0;
		}
			
		setTimeout("my_slider()", 4000);
	} else {
		// nothing
	}
}

// Home page slider grid function
function grid_system(e) {
	// getting grid image
	var copy_path = e.target.src.slice(-19,-4);
	var new_path = copy_path + "-1140x600.jpg";
	document.slider_image.src = new_path;
	
	// getting slider content
	var content_index = ( e.target.src.slice(-5,-4) ) - 1;
	if( i == 0 && content_index != i ) {
		
			for(var a=0; a<8; a++) {
				slider_content[a].style.display = "none";
			}
			
			slider_content[slider_content.length-1].style.display = "none";
			slider_content[content_index].style.display = "block";
			i = content_index;
	} else if(content_index != i) {
		for(var a=0; a<8; a++) {
			slider_content[a].style.display = "none";
		}
		slider_content[i].style.display = "none";
		slider_content[content_index-1].style.display = "none";
		slider_content[content_index].style.display = "block";
		i = content_index;
	}
	//alert(content_index);
	/*slider_content[i].style.display = "none";
	i = content_index;
	slider_content[content_index].style.display = "block";*/ 

}

// home page search function
function getSearch() {
	
	var book = document.getElementById("book");
	var srch = document.getElementById("search_input");
	var search_area = document.getElementById("search");

	if( book.getAttribute("class") == "" ) {
		search_area.style.backgroundSize = "200%";
		book.style.transform = "rotate(0deg)";
		book.setAttribute("class", "moved");
		srch.style.opacity = 1;
		srch.style.transitionDuration = ".5s";
		srch.style.transitionDelay = ".5s";
	} else if( book.getAttribute("class") == "moved" ) {
		search_area.style.backgroundSize = "150%";
		book.setAttribute("class", "");
		book.style.transform = "rotate(-15deg)";
		srch.style.opacity = 0;
		srch.style.transitionDuration = ".1s";
		srch.style.transitionDelay = "0s";
	}
}

// go to top | button func
	function custom_scroll() {
	pageTop = document.getElementById("header_container");
	up_button = document.getElementById("up_bt");
	ypos = window.pageYOffset;
	
	if(ypos > 150) {
		up_button.style.display = "block";
	} else {
		up_button.style.display = "none";
	}

}

// Gallery grid handlers
	function right_bt() {
	
	var handler = document.getElementById("grid_handler");
	var last = document.getElementById("last_image");
	
	if(last.offsetLeft > 300) {
		position = position + -300;
		handler.style.marginLeft =  position + "px";
	}

}
	function left_bt() {
	
		var handler = document.getElementById("grid_handler");
	
		if(handler.offsetLeft < 0) {
			position = position + 300;
			handler.style.marginLeft =  position + "px";
		}
	}

// to select the main image from grid
	function main_image(e) {
		var get_image = e.target.src;
		var locater = get_image.lastIndexOf("grid_")+5;
		var locater2 = get_image.lastIndexOf(".jpg");
		var copy_path = get_image.slice(locater,locater2);
		
		var new_path = "img/gallery/" + copy_path + ".jpg";
		document.gallery_img.src = new_path;
	}