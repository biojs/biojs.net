(function(){

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  function resizeCanvas(id,id2){    
    window.onresize = clipCanvas;
    function clipCanvas(){
      var el = document.getElementById(id);
      var scene = document.getElementById(id2);
      var newWidth,
          newHeight;
      console.log("resize" + scene +" in "+ el);
      newWidth = el.clientWidth;
      newHeight = el.clientHeight;
      console.log("new Width: " + newWidth + ", new Height: " + newHeight);
      scene.width = newWidth;
      scene.height = newHeight;
      console.log("canvasElement width: " + scene.getAttribute("width"));
      drawGrid('gallery-content');
    }
    clipCanvas();
  }

  function drawGridTriangle(id){
    var canvas = document.getElementById(id); 
    console.log(canvas);
    if (canvas.getContext){
      var ctx = canvas.getContext("2d");
      for (var i = 1; i < 20; i += 1){
        ctx.beginPath();
        if (i === 1){
          ctx.moveTo(0,0);
        }
        else {
          ctx.moveTo((i-1) * 100,0);
        }
        
        ctx.lineTo(100 * i,0);
        ctx.lineTo(50 + (i-1) * 100,100);
        ctx.closePath();
        
        ctx.stroke();
      }

      //ctx.fill();
    } 
  }
  
  function drawGrid(id){
    var canvas = new fabric.Canvas(id);
    var rect;
    var xfactor,
        yfactor;
    var polyWidth = 200;
    console.log(canvas);
    if (canvas.getContext){
      for (var i = 0; i < 4; i += 1){
        for (var j = 0; j < 5; j += 1) {
          if (j % 2 === 0){
            xfactor = 0
          }
          else {
            xfactor = polyWidth / 2 - 12.5;
          }
          rect = new fabric.Polyline([
            {x: polyWidth / 2, y: 0},
            {x: polyWidth - 12.5, y: 50},
            {x: polyWidth - 12.5, y: 150},
            {x: polyWidth / 2, y: polyWidth},
            {x: 12.5, y: 150},
            {x: 12.5, y: 50},
            {x: polyWidth / 2, y: 0},
          ],
          {
            left: polyWidth / 2 + 175 * i + xfactor,
            top: polyWidth / 2 + 150 * j,
            fill: 'rgba(0,0,0,0.5)',
            angle: 0,
            cornerSize: 30,
            stroke: 'red',
            strokeWidth: 3,
            hasBorders: false,
            cornerColor: 'rgba(0,0,0,0)'
          });

          canvas.add(rect);
        }
      }
     }
   }
      //ctx.fill(); 

  function movingGallery(id,id2){
    var el = document.getElementById(id);
    var scene = document.getElementById(id2);
    var displayX = document.getElementById('displayX');
    var displayY = document.getElementById('displayY');
    var mouseX,
        mouseY,
        translateX,
        translateY;
    console.log(el);
    function translateScene(event){
      console.log("Move");
      event = event || window.event;
      mouseX = event.clientX;
      mouseY = event.clientY;

      /* displayX.textContent = mouseX;
      displayY.textContent = mouseY; */
      
      translateX =  - mouseX / 6;
      translateY =  - mouseY / 6;

      scene.style.transform = "translate("+ translateX +"px, "+ translateY +"px)";
    }
    el.onmousemove = debounce(translateScene, 10);
  }


  resizeCanvas('gallery-wrapper','gallery-content');
  //drawGrid('gallery-content');
  //movingGallery('gallery-wrapper','gallery-content');
})();