(function(c){var a={direction:function(d){return(d<0?-1:1)
},degrees:function(d){return(Math.floor(Math.abs(d)))%360
},scale:function(d){return(1-(d%180)/90)*(d>=180?-1:1)
}};
c.fx.step.rotate3Di=function(d){direction=a.direction(d.now);
degrees=a.degrees(d.now);
scale=a.scale(degrees);
if(d.options&&typeof d.options.sideChange!="undefined"){if(d.options.sideChange){var e=c(d.elem).data("rotate3Di.prevScale");
if(scale*e<=0){d.options.sideChange.call(d.elem,(scale>0||e<0));
c(d.elem).data("rotate3Di.prevScale",c(d.elem).data("rotate3Di.prevScale")*-1)
}}scale=Math.abs(scale)
}c(d.elem).data("rotate3Di.degrees",direction*degrees);
c(d.elem).css("transform","skewY("+direction*degrees+"deg) scale("+scale+", 1)")
};
var b=c.fx.prototype.cur;
c.fx.prototype.cur=function(){if(this.prop=="rotate3Di"){return c(this.elem).data("rotate3Di.degrees")||0
}return b.apply(this,arguments)
};
c.fn.rotate3Di=function(i,g,e){if(typeof g=="undefined"){g=0
}if(typeof e=="object"){c.extend(e,{duration:g})
}else{e={duration:g}
}if(i=="toggle"){if(c(this).data("rotate3Di.flipped")){i="unflip"
}else{i="flip"
}}if(i=="flip"){c(this).data("rotate3Di.flipped",true);
var f=-1;
if(typeof e=="object"&&e.direction&&e.direction=="clockwise"){f=1
}i=f*180
}else{if(i=="unflip"){c(this).data("rotate3Di.flipped",false);
i=0
}}var h=c(this).data("rotate3Di.degrees")||0;
c(this).data("rotate3Di.prevScale",a.scale(a.degrees(h)));
c(this).animate({rotate3Di:i},e)
}
})(jQuery);