---
layout: post
title:  "BioJS codebase hackathon in Munich"
date:   2014-07-04 18:32:40
categories: code
extra_js: ["//yandex.st/highlightjs/8.0/highlight.min.js"]
extra_css: ["/css/solarized_dark.css"]
no_date: true
---

<img src="/img/posts/2014-07-04_20-09-03_scrot.jpg" class="center-block" />

__Time__: 4th-9th August  
__Location__: digital or [in Munich][location] (department for Bioinformatics and Computational Biology at TUM)

### An unparalleled opportunity for hardcore JavaScript developers to have fun doing cool "Bio" hacking.

The hackathon is under the umbrella of achieving the milestones for a new [BioJS 2.0][biojs-lib]: have an __easy to use__ BioJS lib that is a __joy for devs__ to code with.  
We have some loosely defined objectives for the week (you are welcome to [bring your own][contact]!):

* draft a BioJS core package 
* play with testing of biological computations in the web
* discover the [TnT library][tnt]
* hack with modular JavaScript, an [AMD-based library][biojs-amd] and in-browser compilation
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

4. Does the BioJS project have a "master plan"?
---------------------------------------

Our "plan" can be described as steady open work-in-progress (aka draft). So if anyone has a __great idea__ or opinion against it we will add or update the draft.  
That is why we - as an __open community__ - encourage everyone to participate in this progress and share his opinion with us.

5. What are you going to change?
-------------------------------

__Update__: visit [our shared Google doc][changes] for an up-to-date list  
(contact Seb if you don't have edit access)

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


6. Where is your roadmap / timeline? 
----------------------------------

A concrete timeline is [in-work][changes], however we hope our milestones 
(chronically ordered) give you a good impression.

0. Agree on the [list of changes][changes] (before the hackathon)
1. Design common objects
2. Define a BioJS core (data handling, manipulation = I/O, REST, parsers)
3. Create a working build, testing and documentation setup
4. Rewrite current components as modules and inject common object

7. Is modernization of BioJS a part of your agenda?
--------------------------------------------------

Yeah you got it. Our agenda is "have an __easy to use__ BioJS lib that is __fun for devs__ to code". 

8. Will you switch to use "de-facto standard JS tools" (like Grunt)?
------------------------------------------------------

Even though your definition of "de-facto standard JS tools" might be obvious, it can be misleading.

One example from our goals is the transition to JavaScript modules for better __code re-usability__.
The current plan is to achieve this with the Asynchronous Module Definition (AMD).
However there is an alternative CommonJS specification which Node.js use for its "require".
If the goal of [ECMAScript 6][ecma6] to achieve a "smooth interoperability with existing JS module systems like AMD, CommonJS, and Node.js" had been successful, then we would have considered this as "standard", but unfortunately they moved it to ES 7.

So neither of the current specs is a standard and its about the community to decide which one is the best!

To cut the long story from above short: Yep. It's about __"fun for devs to use"__!

[ecma6]: http://wiki.ecmascript.org/doku.php?id=harmony:modules

9.  I searched in your repository after an dev branch (and couldn't find one)!
-----------------------------------------------------------------------------

As mentioned in the agenda we first would like to __collect and agree__ on a list of planned changes.
On the [separate repo of Seb][biojs-amd] most of the points like the AMD modules or the grunt automation have been tested. You can find it on [github][biojs-amd] (be aware - it's written in CoffeeScript).

Furthermore you should have a look at the efforts of the [TnT][tnt], [bionode][bionode] and even [JBrowse][jbrowse] project.

[JBrowse]: https://github.com/GMOD/jbrowse/tree/master

10. Where exactly will the hackathon be? <a name="location"> </a>
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

11. Participants
---------------

* David Dao (Munich, full week)
* Sebastian Wilzbach (Munich, full week)
* Saket Choudhary (India, full week)
* Gustavo Adolfo Salazar Orejuela (Cape town, Wednesday - Friday): Testing
* Keiichiro Ono (San Diego)
* Ricardo Ramirez-Gonzalez (UK, pre-meetings)
* Manuel Corpas (UK, organizer)

[(add yourself to the party people)][add-more]
  

<script>
hljs.initHighlightingOnLoad();
</script>
