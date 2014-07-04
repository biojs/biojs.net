---
layout: post
title:  "Announcing BioJS codebase hackathon in Munich"
date:   2014-07-04 18:32:40
categories: code
extra_js: ["//yandex.st/highlightjs/8.0/highlight.min.js"]
extra_css: ["/css/solarized_dark.css"]
---

<img src="/img/posts/2014-07-04_20-09-03_scrot.jpg" class="center-block" />

We are very happy to announce that BioJS will have a hackathon in Munich
in the first week (08/04 - 08/09) of August.
This is an unparalleled opportunity for hardcore javascript developers excited
by the "bio" flavour of development to join this exciting initiative.

In this week we try to develop the BioJS codebase and combine the benfits of 

* the current [BioJS 0.1 library][biojs-lib]
* the [TnT library][tnt] create by Miguel
* the [AMD-based library][biojs-amd] of Seb
* (hopefully) the efforts of the [Bionode][bionode] project

If you have input, ideas or want to hack with us - please [let us know][contact] :)

```
require ["biojs/hackathon"], (Hackathon) ->
	party = new Hackathon "Munich"
	party.setTopic "BioJS codebase"
	party.setStart 2014-08-4
	party.inviteAwesomePeople()
	party.orderFood()
```

[biojs-lib]: https://github.com/biojs/biojs
[tnt]: https://emepyc.github.io/tnt/
[biojs-amd]: https://github.com/greenify/biojs-msa-amd
[bionode]: https://github.com/bionode/bionode
[contact]:  https://groups.google.com/forum/#!forum/biojs-technical

Planed Changes
--------------

* possibility to __reuse code__ -> **BioJS core**
  - standard objects (aka data schemes)
  - common core for I/O, parsing, REST APIs
* possibility to **reuse components** (e.g)
   -  FeatureViewer module  for a component if it wants to show features
   -  user settings module (aka menu bar) for user interaction  
* use the asynchronous module definition (__AMD__, we will use RequireJS as lib)
* **seperate examples** from source files and choose a reusable format like markdown
* **lower entry barrier** for devs (aka easy build setup) and users (aka easy integration)
* change the maven-based build system to **grunt** and
   give each component the possibility to have a specialized build setup
* include a **testing framework** (probably [mocha][mocha]),
   but give the dev the option to use their favorite testing framework (by defining a testing call)
* give an component dev the ability to **test and document** his code with snippets
  like on the [MSA project][msa-project] or in [AngularJS][angularjs]
  (the awesome "edit in Plunkr" button is a future milestone)

[(add more / change this list)][add-more]

[mocha]: https://visionmedia.github.io/mocha/
[angularjs]: https://docs.angularjs.org/api/ng/directive/ngClick
[msa-project]: http://dev.biojs-msa.org
[add-more]: https://github.com/biojs/biojs.github.io/blob/master/_posts/2014-07-04-announcing-hackathon.md

Our milestones
-------------

1. Design common objects
2. Define a BioJS core (data handling, manipulation = I/O, REST, parsers)
3. Create a working build, testing and documentation setup
4. Rewrite current components as modules and inject common object

Participants
------------

* David Dao (Munich)
* Sebastian Wilzbach (Munich)
* Saket Choudhary (India)

[(add yourself to the list)][add-more]
  
  
Click here to add this event to your calendar

<a target="_blank" href="https://www.google.com/calendar/event?action=TEMPLATE&tmeid=NXFoYmxrb29jaWFmNWh2czF2NTY1N2thcDggcnU5NXU3amVrdGFjMHRpaHBwNmMzdTR1MWdAZw&tmsrc=ru95u7jektac0tihpp6c3u4u1g%40group.calendar.google.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"></a>


<script>
hljs.initHighlightingOnLoad();
</script>
