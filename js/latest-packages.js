function buildBioJSWidget(div, key, optsUser) {
  jQuery.getJSON("http://workmen.biojs.net/search?limit=5&orderby=" + key + "&reversesort=1", function(pkgs) {
    var items = [];
    var opts = {
      stars: false,
      modified: false,
      version: false
    };
    jQuery.extend(opts, optsUser);

    var row = new SimpleRow();
    row.push("", 1);
    row.push("Name", 3);
    if (opts.modified) {
      row.push("Modified", 3);
    } else if (opts.stars) {
      row.push("<span class='glyphicon glyphicon-star'></span>", 2);
    } else if (opts.created) {
      row.push("Created", 3);
    }
    if (opts.commits) {
      row.push("Commits", 3);
    } else if (opts.npm || opts.npmWeek) {
      row.push("<span class='glyphicon glyphicon-save'></span>", 3);
    } else if (opts.version) {
      row.push("Version", 2);
    }
    items.push(row.toString());

    pkgs.forEach(function(pkg) {
      // see the registry for more options
      pkg.avatar = "https://sigil.cupcake.io/" + pkg.name; // default
      if (pkg.github !== undefined) {
        pkg.avatar = pkg.github.owner.avatar_url + "&s=42";
      }
      pkg.github = pkg.github || {};
      // check for specific logo 
      if (pkg.latest.biojs !== undefined && pkg.latest.biojs.logo !== undefined) {
        var logo = pkg.latest.biojs.logo;
        var hasFileExtension = /^.*\.[^\\]+$/;
        // fallback to a default logo
        if (!hasFileExtension.test(logo)) {
          logo += "logo.png";
        }
        pkg.avatar = pkg.github.raw_url + logo;
      }

      var row = new SimpleRow();
      row.push('<img width="25" height="25" src="' + pkg.avatar + '">', 1);
      row.push("<a href='http://registry.biojs.net/#/detail/" + pkg.name + "'>" + pkg.name + "</a>", 3);

      // second column
      if (opts.modified) {
        pkg.strModified = moment(pkg.modified).fromNow();
        row.push(pkg.strModified, 3);
      } else if (opts.created) {
        pkg.strCreated = moment(pkg.created).fromNow();
        row.push(pkg.strCreated, 3);
      } else if (opts.stars) {
        row.push(pkg.github.stargazers_count || 0, 2);
      }

      // third column
      if (opts.npm) {
        row.push(pkg.npmDownloads);
      } else if (opts.version) {
        row.push(pkg.version, 2);
      } else if (opts.npmWeek) {
        row.push(pkg.npmDownloadsLastWeek, 3);
      } else if (opts.commits) {
        row.push(pkg.github.commits || 0, 2);
      }

      items.push(row.toString());
    });
    var el = jQuery("#" + div);
    el.addClass("container-fluid");
    el.addClass("biojs-packages-widget");
    el.html(items.join(""));
  });
}

buildBioJSWidget("biojs-new-packages-recent", "modified", {
  modified: true,
  version: true
});
buildBioJSWidget("biojs-new-packages-popular", "github.stargazers_count", {
  stars: true,
  commits: true
});
buildBioJSWidget("biojs-new-packages-reused", "npmDownloadsLastWeek", {
  created: true,
  npmWeek: true
});

var SimpleRow = function() {
  this.columns = [];
};
SimpleRow.prototype.push = function(text, width) {
  this.columns.push({
    text: text || "&nbsp",
    width: width || 2
  });
};
SimpleRow.prototype.toString = function() {
  var columns = this.columns.map(function(el) {
    return "<div class='col-md-" + el.width + " col-xs-" + el.width + "'>" + el.text + "</div>";
  });
  return "<div class='row'>" + columns.join("") + "</div>";
};
