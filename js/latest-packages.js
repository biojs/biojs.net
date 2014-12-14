function buildBioJSWidget(div, key, optsUser) {
  jQuery.getJSON("http://workmen.biojs.net/search?limit=5&orderby=" + key + "&reversesort=1", function(pkgs) {
    var items = [];
    var opts = {
      stars: true,
      modified: true,
      version: false
    };
    jQuery.extend(opts, optsUser);
    header = '<div class="row">';
    header += '<div class="col-md-1">&nbsp;</div>';
    header += "<div class='col-md-3'>Name</div>";
    if (opts.modified) {
      header += "<div class='col-md-3'>Modified</div>";
    } else if (opts.stars) {
      header += "<div class='col-md-2'><span class='glyphicon glyphicon-star'></span></div>";
    } else if (opts.created) {
      header += "<div class='col-md-3'>Created</div>";
    }
    if (opts.commits) {
      header += "<div class='col-md-3'>Commits</div>";
    } else if (opts.npm) {
      header += "<div class='col-md-1'><span class='glyphicon glyphicon-save'></span></div>";
    }else if (opts.version) {
      header += "<div class='col-md-2'>Version</div>";
    }
    header += '</div>';
    items.push(header);
    pkgs.forEach(function(pkg) {
      // see the registry for more options
      pkg.avatar = "https://sigil.cupcake.io/" + pkg.name;
      pkg.stars = 0;
      pkg.commits = 0;
      if (pkg.github !== undefined) {
        pkg.avatar = pkg.github.owner.avatar_url + "&s=42";
        pkg.stars = pkg.github.stargazers_count;
        pkg.commits = pkg.github.commits;
      }

      var div = '<div class="col-md-1"><img width="25" height="25" src="' + pkg.avatar + '"></div>';
      div += "<div class='col-md-3'><a href='http://registry.biojs.net/#/detail/" + pkg.name + "'>" + pkg.name + "</a></div>";
      
      // second column
      if (opts.modified) {
        pkg.strModified = moment(pkg.modified).fromNow();
        div += "<div class='col-md-3'>" + pkg.strModified + "</div>";
      } else if (opts.created) {
        pkg.strCreated = moment(pkg.created).fromNow();
        div += "<div class='col-md-3'>" + pkg.strCreated + "</div>";
      } else if (opts.stars) {
        div += "<div class='col-md-2'>" + pkg.stars + "</div>";
      } 

      // third column
      if (opts.npm) {
        div += "<div class='col-md-2'>" + pkg.npmDownloads + "</div>";
      } else if (opts.version) {
        div += "<div class='col-md-2'>" + pkg.version + "</div>";
      } else if (opts.commits) {
        div += "<div class='col-md-2'>" + pkg.commits + "</div>";
      } 

      items.push("<div class='row'>" + div + "</div>");
    });
    var el = jQuery("#" + div);
    el.addClass("container-fluid");
    el.addClass("biojs-packages-widget");
    el.html(items.join(""));
  });
}

buildBioJSWidget("biojs-new-packages-recent", "modified", {
  version: true,
  stars: false
});
buildBioJSWidget("biojs-new-packages-popular", "github.stargazers_count", {
  modified: false,
  commits: true
});
buildBioJSWidget("biojs-new-packages-reused", "npmDownloads", {
  stars: false,
  modified: false,
  created: true,
  npm: true
});
