(function(){
  $(document).ready(function(){
    console.log("frontpage");
    var fullhearts;
    var remhearts;
    var ratingDisplay;
    var ratingsFeed = [
      {
        id: 1,
        hearts: 3
      },
      {
        id: 2,
        hearts: 4.1
      },
      {
        id: 3,
        hearts: 2.7
      }
    ];
    $.each(ratingsFeed, function( index, value ) {
      fullhearts = value.hearts - value.hearts % 1;
      remhearts = value.hearts - fullhearts;
      ratingDisplay = $(".ratings:eq("+ index  +")");
      ratingDisplay.children().slice(0,fullhearts).find('.full-item').css({'width':'100%'});
      if (remhearts > 0){
        ratingDisplay.children().slice(fullhearts,fullhearts + 1).find('.full-item').css({'width': remhearts * 100 + '%'});
      }
    });
  });
})();