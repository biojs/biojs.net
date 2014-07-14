---
layout: post
title:  "Announcing BioJS codebase hackathon in Munich"
date:   2014-07-04 18:32:40
categories: code
extra_js: ["//yandex.st/highlightjs/8.0/highlight.min.js"]
extra_css: ["/css/solarized_dark.css"]
---

<img src="/img/posts/2014-07-04_20-09-03_scrot.jpg" class="center-block" />

Time: 4th-9th August  
Location: digital or [in Munich][location] (department for Bioinformatics and Computational Biology at TUM)

### An unparalleled opportunity for hardcore JavaScript developers to have fun doing cool "Bio" hacking.

The hackathon is under the umbrella to achieve the milestones for a [BioJS 2.0][biojs-lib] release.
We have defined some loosely defined objectives for the week (you are welcome to [bring your own][contact]!):

* draft a BioJS core package 
* play with testing of biological computations in the web
* discover the [TnT library][tnt]
* hack with modular JavaScript, a [AMD-based library][biojs-amd] and in-browser compilation
* create a way to give component developers independence
* achieve a plug & play registry
* get to grips with the [Bionode][bionode] project

If you have open questions look at the FAQ below or just [contact us][contact].

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
[location]: #location

Add this event to your calendar

<a target="_blank" href="https://www.google.com/calendar/event?action=TEMPLATE&tmeid=NXFoYmxrb29jaWFmNWh2czF2NTY1N2thcDggcnU5NXU3amVrdGFjMHRpaHBwNmMzdTR1MWdAZw&tmsrc=ru95u7jektac0tihpp6c3u4u1g%40group.calendar.google.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"></a>

1. Is the hackathon open to anyone?
-------------------------------------

Yeah we are an open source organization with open hackathons. 
However it is different from a normal "user" hackathon:

* to offer __anyone__ the chance to join it will be digital  
We will be available 24/7 on IRC, Skype, Hangouts etc. and if you are living in Bavaria we have a lot of computers and space [at TUM][location] to have a cool party.

* the goal is to improve __re-usability__, __testability__ and the __developing + build process__ for the BioJS codebase.  
This means we are happy to get feedback from current or future BioJS developers and users (even if you don't have time to join the real hacking event).  
On the other side we won't cover a "How to develop a component" at this event.

2. Why should I get involved?
-------------------------------

You are a JavaScript developer and you

* are __currently developing__ a BioJS component (or developed one in the past)  
&rarr; (help us to) remove things that annoy you  
&rarr; (help us to) improve your workflow  

* __consider using__ BioJS in the future  
&rarr; let us know your requirements and have influence on decisions that are important to you

* __tried__ BioJS in the past and things were too complicated  
&rarr; (help us to) remove the barrier

* __love__ to design (an architecture)  
&rarr; (help us to) to create an awesome design

* have __experience__ with modular JavaScript (AMD)  
&rarr; let BioJS benefit from your experience

3. How can I get involved?
----------------------------

Even if you don't have time during our Hackathon, you can raise your voice and

* join one of our pre-meetings about our changes and design decisions ([current list of planned changes][changes])
* join the public [biojs-technical][biojs-technical] mailing list

... or just drop by [in Munich][location].

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

[(add your idea)][add-more]

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

6. Where exactly will the hackathon be? <a name="location"> </a>
-----------------------------------------------------------------

We will have a room, computers, fast Internet and junk food (e.g. pizza) at the [department for Bioinformatics and Computational Biology][rostlab]
of the Technische Universität München.

If you are unlucky and don't have the privilege to live in the lovely Bavaria,
we will have Skype, Hangouts or plain IRC meetings (depending on your demand).

You can find us using this address:

85748 [Garching b. München][garching]  
[Boltzmannstraße 3][location-fmi]  
Room [01.08.021][location-indoor]

(Details might change, so be sure to subscribe to [our mailing list][biojs-technical]).

[rostlab]: https://rostlab.org/group/contact
[garching]: https://portal.mytum.de/campus/roomfinder/roomfinder_viewmap?mapid=54&roomid=01.08.021@5608
[location-fmi]: https://portal.mytum.de/campus/roomfinder/roomfinder_viewmap?mapid=80&roomid=01.08.021@5608
[location-indoor]: https://portal.mytum.de/campus/roomfinder/roomfinder_viewmap?mapid=104&roomid=01.08.021@5608

7. Participants
---------------

* David Dao (Munich, full week)
* Sebastian Wilzbach (Munich, full week)
* Saket Choudhary (India, full week)
* Ricardo Ramirez-Gonzalez (UK, pre-meetings)

[(add yourself to the list)][add-more]
  

<script>
hljs.initHighlightingOnLoad();
</script>
