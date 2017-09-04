$(document).ready(function(){

	let containerClientWidth;

	const selector = {
		main: 			$("#mainContainer"),
		navigation: 	$("#mainNav"),
		header: 		$("header"),
		skillContainer: $("#skillContainer"),
		profiles: 		$("header").children(".footer").children("a"),
		blocks: 		$("#mainContainer").children(".wrapper"),
		pContainer: 	$("#pContainer"),
		pWrapper: 		$(".pWrapper"),
		leftButton:  	$("#leftBt"),
		rightButton: 	$("#rightBt")
	};
	
	var currentWidth  = window.innerHeight,
		currentHeight = window.innerWidth,
		styler = new styleScript();

	//	Site content
		var content = {
			heading: "My Portfolio",
			intro: "My self, Aizaz Shahid, from Pakistan. A student of Computer Science, who believe in excellence, but still looking for that. I do like problem solving or facing new challenges. Now, learning Software Engineering and Web Development. Currently, sharping skills through Free Code Camp."
		};
	
	adjustBlocks();
	checkButtons();
	setTimeout( () => showTextAnimated(content.intro, selector.header.children(".content").children("p")), 1000 );
	setTimeout( () => showSkillBoxes(selector.header.children(".content").children("p")), 2000 );


	/* Animation  ================ */
		
	/* Animation Ends ============ */
	
	$(".mainLinks").click(movePages);

	/* 	Event Listeners  ================ */
		window.addEventListener("resize", adjustBlocks);
		window.addEventListener("resize", checkButtons);
		selector.leftButton[0].addEventListener("click", (event) => moveSlider(event));
		selector.rightButton[0].addEventListener("click", (event) => moveSlider(event));
		selector.navigation.on("mouseover", () => {
			selector.navigation.css("height", "165px");
		});
		selector.navigation.on("mouseout", () => {
			selector.navigation.css("height", "35px");
		});
	/* 	Event Listeners Ends ============ */


	//	Removing extra space created by hosting
		$("body").children("div:nth-child(3)").css("display", "none");
		$("body").children("div:nth-child(4)").css("display", "none");
	

	/*	Adding the hover effect to the profile links ============ */
		var styles = styler.getStyle(selector.profiles, "border-bottom-color");
		styler.onHover(selector.profiles, styles, "background-color");
	

	function adjustBlocks() {
		currentWidth = window.innerWidth;
		currentHeight = window.innerHeight;
		
		var pSize = currentHeight * selector.blocks.length;
		
		// To change the size of #mainContainer and .wrapper
			selector.main.css("height", pSize + "px");
			selector.main.css("width", currentWidth + "px");
			selector.blocks.css("height", currentHeight + "px");
			selector.blocks.css("width", currentWidth + "px");
		
		// Changing top position of childs of #mainContainer 
			for(var i=0, j=0; i < selector.blocks.length; i++, j += currentHeight) {
				selector.main.children(".wrapper:nth-child(" + (i+1) + ")").css("top", j);
			}
		
		const getPaddingByRatio = (ratio, size, percentage) => (( (ratio * percentage) / 100) * size ) / 2,
			  getPaddingByPercentage = (percentage, size) => ((percentage / 100) * size) / 2;

		const	xRatio = parseFloat(currentWidth / currentHeight),
				yRatio = parseFloat(currentHeight / currentWidth);

		/*	To resize the first page */
			{
				let reqLeftPadding = (xRatio > yRatio) ? getPaddingByRatio(yRatio, currentWidth, 25)  : getPaddingByPercentage(25, currentWidth),
					reqTopPadding  = (yRatio > xRatio) ? getPaddingByRatio(xRatio, currentHeight, 25) : getPaddingByPercentage(25, currentHeight),
					reqWidth = currentWidth - (reqLeftPadding * 2), 
					reqHeight = currentHeight - (reqTopPadding * 2);

				selector.header.css( {
					"width": reqWidth + "px",
					"height": reqHeight + "px",
					"margin": reqTopPadding + "px " + reqLeftPadding + "px"
				});
			}

		/*	To resize the second page */
			{
				let reqLeftPadding = (xRatio > yRatio) ? getPaddingByRatio(yRatio, currentWidth, 15)  : getPaddingByPercentage(15, currentWidth),
					reqTopPadding  = (yRatio > xRatio) ? getPaddingByRatio(xRatio, currentHeight, 15) : getPaddingByPercentage(15, currentHeight);

				selector.blocks.children("section").children(".content")[0].style.margin = reqTopPadding + "px " + reqLeftPadding + "px";
			}
			{
				let reqLeftPadding = (xRatio > yRatio) ? getPaddingByRatio(yRatio, currentWidth, 20)  : getPaddingByPercentage(20, currentWidth),
					reqTopPadding  = (yRatio > xRatio) ? getPaddingByRatio(xRatio, currentHeight, 38) : getPaddingByPercentage(38, currentHeight);
				selector.pContainer[0].style.margin = reqTopPadding + "px " + reqLeftPadding + "px " + reqLeftPadding + "px " + reqLeftPadding + "px";

			}
			
			{
				let reqTopPadding  = (yRatio > xRatio) ? getPaddingByRatio(xRatio, currentHeight, 90) : getPaddingByPercentage(90, currentHeight);
				$(".projectButton").css("top", reqTopPadding + "px");

			}
			
			// selector.blocks[1].children[0].style.margin = reqTopPadding + "px " + reqLeftPadding + "px";
			// selector.blocks[1].children[0].style.width = reqWidth + "px";
			// selector.blocks[1].children[0].style.height = reqHeight + "px";
			// selector.pContainer[0].style.background = "red";
	}


	function movePages(e) {

		var link = parseInt(e.target.attributes.alt.value);
		
		if(link === 1)
			selector.main.css("top", 0);
		else if(link === 2)
			selector.main.css("top", -currentHeight);
		else if(link === 3)
			selector.main.css("top", -(currentHeight * 2));
	}


	function showTextAnimated(text, container) {
		var content = text.split(""),
			contentTransparent = content.map( (val) => '<span class="transparent">' + val + '</span>' ),
			index = 1;

		container[0].innerHTML = contentTransparent.join("");

		const intervalContent = setInterval(
			() => (index === content.length+1) ? clearInterval(intervalContent) : addContent(), 
			40
		);

		function addContent() {
			container.children(".transparent:nth-child("+index+")").css("color", "rgba(40,40,40,.7)");
			index++;
		}		
	}


	function showSkillBoxes(header) { 
		let lastIndex = content.intro.length,
			lastChild = header.children("span:nth-child("+(lastIndex-100)+")"),
			i=0; // i is made for the false statment of ternary operator

		const intervalText = setInterval( 
			() => (lastChild.css("color") === "rgba(40, 40, 40, 0.7)") ? show() : i+1, 
			200
		);
		
		function show() {
			selector.skillContainer.children().children(".skill").css( {
				"animation": "skillBoxes 4s ease-in",
				"display": "inline-block"
			});
			setTimeout( () => {
				selector.skillContainer.children().children("span").attr("class", "");
				selector.skillContainer.children("h2").css({
					"text-align": "center",
					"margin-left": "0px"
				});
			}, 3000 );
			
			return clearInterval(intervalText);
		}
	}


	function checkButtons() {
		// offsetLeft: 861
		let offsetLeft = {
			first: selector.pContainer.children(".pWrapper:first-child")[0].offsetLeft,
			last: selector.pContainer.children(".pWrapper:last-child")[0].offsetLeft
		};

		var marginRight = styler.getIntFromSize(selector.pWrapper.css("margin-right"));
		var wrapperWidth = selector.pWrapper[0].clientWidth;
		var wrappersWidth = (selector.pWrapper.length * (wrapperWidth + marginRight)) - marginRight;
			
		const delDisable = (button) => {
			let classes = button.attr("class");
			if(button.attr("class").indexOf("disabled") > -1) {
				button.attr("class", classes.replace(/(disabled)|(\s)/g, ""));
			} else {
				return false;
			}
		};

		const setDisable = (button) => {
			if(button.attr("class").indexOf("disabled") === -1) {
				let classes = button.attr("class");
				button.attr("class", classes + " disabled");
			} 
  		};

		if ( wrappersWidth > selector.pContainer[0].clientWidth ) {
			( selector.pContainer[0].clientWidth < offsetLeft.last + wrapperWidth ) ? delDisable(selector.rightButton) : setDisable(selector.rightButton);
			( styler.getIntFromSize(styler.getStyle(selector.pWrapper[0], "left")) < 0) ? delDisable(selector.leftButton) : setDisable(selector.leftButton);
		}
	}


	function moveSlider(e) {

		let offsetLeft = {
			first: selector.pContainer.children(".pWrapper:first-child")[0].offsetLeft,
			last: selector.pContainer.children(".pWrapper:last-child")[0].offsetLeft + 255
		};

		const targeted = e.target.outerHTML;

		const changeLeftPos = (num) => {
			selector.pWrapper.css("left", function(index, style) {
				return (styler.getIntFromSize(style) + num) + "px";
			});
		};

		const getProperWidth = () => {
			return styler.getIntFromSize(selector.pWrapper.css("width")) + styler.getIntFromSize(selector.pWrapper.css("margin-right"));
		};

		(targeted.search("right") > -1) ? changeLeftPos(-getProperWidth()) : changeLeftPos(getProperWidth());

		setTimeout(checkButtons, 600);
	}


}); // end of .ready(){ ... }