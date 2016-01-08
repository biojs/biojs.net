(function(){
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
      
      translateX =  - mouseX / 8;
      translateY =  - mouseY / 8;

      scene.style.transform = "translate("+ translateX +"px, "+ translateY +"px)";
    }
    el.onmousemove = translateScene;
    
  }
  
  movingGallery('example-wrapper','example-banderole');
}());
