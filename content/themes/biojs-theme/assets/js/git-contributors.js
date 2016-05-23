(function(){
  var repoList = ['biojs','biojs.net2','biojs3','registry-workmen','talks','slush-biojs','edu','biojs.net','sniper'];
  var request;
  function createContributorsList(){
    console.log("data arrived");
    var responseData = JSON.parse(this.responseText);
    for (var i = 0; i < responseData.length; i += 1){
      console.log("Contributor: " + responseData[i].login);
    }
  }
  console.log("git contributors");
  for (var j = 0; j < repoList.length; j += 1){
    request = new XMLHttpRequest();
    request.onload = createContributorsList;
    request.open('get','https://api.github.com/repos/biojs/'+repoList[j]+'/contributors', true);
    request.send();
  }



})();