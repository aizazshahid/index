const styleScript = function() {

	var computedStyle = (element) => (window.getComputedStyle) ? window.getComputedStyle(element, null) : element.currentStyle;
	
	this.getStyle = (source, property) => {
		let style;

		if(!source.style) {
			if(source.length === 1) {
				style = computedStyle(source);
				return Array.isArray(property) ? combined() : (style && style[property] !== "") ? style[property] : "Not found";
			}
		} else if(source.style) {
				style = computedStyle(source);
				return Array.isArray(property) ? combined() : (style && style[property] !== "") ? style[property] : "Not found";
		}

		function combined() {
			return property.reduce( (acc, val) => {
				return acc += " " + style[val];
			}, "").replace(/^\s/, "");
		}

		return source.map((val, index) => {
			style = computedStyle(source[val]);
			return (Array.isArray(property)) ? combined() : style[property];
		});	
	};

	this.setStyle = (dest, property) => {

	};

	this.onHover = (selector, value, valueToSet) => {
		for (let i = 0; i < value.length; i++) {
			selector[i].onmouseover = () => addStyle(value[i], i, valueToSet);
			selector[i].onmouseout  = () => addStyle("", i, valueToSet);
		}
		function addStyle(value, index, property) {
			selector[index].style[property] = value;
		}
	};

	this.getIntFromSize = (str) => {
		return Number( str.replace("px", "") );
	};
	
};


