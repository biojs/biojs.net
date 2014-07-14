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
in the second week (08/04 - 08/09) of August.
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
	party.setStart 2014-08-04
	party.inviteAwesomePeople()
	party.orderFood()
```

[biojs-lib]: https://github.com/biojs/biojs
[tnt]: https://emepyc.github.io/tnt/
[biojs-amd]: https://github.com/greenify/biojs-msa-amd
[bionode]: https://github.com/bionode/bionode
[contact]:  https://groups.google.com/forum/#!forum/biojs-technical

Add this event to your calendar

<a target="_blank" href="https://www.google.com/calendar/event?action=TEMPLATE&tmeid=NXFoYmxrb29jaWFmNWh2czF2NTY1N2thcDggcnU5NXU3amVrdGFjMHRpaHBwNmMzdTR1MWdAZw&tmsrc=ru95u7jektac0tihpp6c3u4u1g%40group.calendar.google.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"></a>

1. Is the hackathon open to anyone?
-------------------------------------

Yeah we are an open source organisation with open hackathons. 
However it is different from a normal "user" hackathon:

* to offer anyone the chance to join it will be digital  
We will be available 24/7 on IRC, Skype, Hangouts etc. and if you are living in Bavaria we have a lot of computers and space at TUM to have a cool party.

* the goal is to improve re-usability, testability and the developing + build process for the BioJS codebase.  
This means we are happy to get feedback from current or future BioJS developers and users (even if you don't have time to join the real hacking event).
On the other side we won't cover a "How to develop a component".

2. Why should I get involved?
-------------------------------

You are a JavaScript developer and you

* are currently developing a BioJS component (or developed one in the past)  
&rarr; (help us to) remove things that annoy you  
&rarr; (help us to) improve your workflow  

* consider using BioJS in the future  
&rarr; let us know your requirements and have influence on decisions that are important to you

* tried BioJS in the past and things were too complicated  
&rarr; (help us to) remove the barrier

* love to design (an architecture)  
&rarr; (help us to) to create an awesome design

* have experience with modular JavaScript (AMD)  
&rarr; let BioJS benefit from your experience

3. How can I get involved?
----------------------------

Even if you don't have time during our Hackathon, you can raise your voice and

* join one of our pre-meetings about our changes and design decisions ([current list of planned changes][changes])
* join the public [biojs-technical][biojs-technical] mailing list

[changes]: https://docs.google.com/document/d/1RifA4_DfG3CPa2yVxNZHRtLztZ-lGieapzfGdrPtOIw
[biojs-technical]: https://groups.google.com/forum/#!forum/biojs-technical

4. What are you going to change?
-------------------------------

__Update__: visit [our shared Google doc][changes] for an up-to-date list

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


5. Where is your roadmap / timeline? 
----------------------------------

A concrete timeline is [in-work][changes], however we hope our milestones 
(chronically ordered) give you a good impression.

0. Agree on the [list of changes][changes] (before the hackathon)
1. Design common objects
2. Define a BioJS core (data handling, manipulation = I/O, REST, parsers)
3. Create a working build, testing and documentation setup
4. Rewrite current components as modules and inject common object

6. Participants
------------

* David Dao (Munich)
* Sebastian Wilzbach (Munich)
* Saket Choudhary (India)

[(add yourself to the list)][add-more]
  

<script>
hljs.initHighlightingOnLoad();
</script>
