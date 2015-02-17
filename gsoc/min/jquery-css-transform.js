(function(b){function d(f){var e=["transform","WebkitTransform","msTransform","MozTransform","OTransform"];
var g;
while(g=e.shift()){if(typeof f.style[g]!="undefined"){return g
}}return"transform"
}var c=null;
var a=b.fn.css;
b.fn.css=function(e,f){if(c===null){if(typeof b.cssProps!="undefined"){c=b.cssProps
}else{if(typeof b.props!="undefined"){c=b.props
}else{c={}
}}}if(typeof c.transform=="undefined"&&(e=="transform"||(typeof e=="object"&&typeof e.transform!="undefined"))){c.transform=d(this.get(0))
}if(c.transform!="transform"){if(e=="transform"){e=c.transform;
if(typeof f=="undefined"&&jQuery.style){return jQuery.style(this.get(0),e)
}}else{if(typeof e=="object"&&typeof e.transform!="undefined"){e[c.transform]=e.transform;
delete e.transform
}}}return a.apply(this,arguments)
}
})(jQuery);