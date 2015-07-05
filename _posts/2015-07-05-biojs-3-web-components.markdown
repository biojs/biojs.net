---
title: "BioJS 3: Web components"
layout: post
date: 2015-07-05 21:00:44
---


We are very happy to announce that BioJS will move forward to modularize every component as Web Component.
If you already have contributed to BioJS, don't worry! We will just extend the current Biojs registry and add some extra functionality for Web Components.


<img width="50%" alt="Web components logo" src="http://webcomponents.org/img/logo.svg" />

What are Web Components?
------------------------

"Web Components are a set of standards currently being produced by Google engineers as a W3C specification that allow for the creation of reusable widgets or components in web documents and web applications. The intention behind them is to bring component-based software engineering to the World Wide Web." (Wikipedia)

Why Web Components?
-------------------

* __automatic encapsulation__ thanks to the __shadow DOM__ (no more problems with components modifying your site, id conflicts, css conflicts or problems to create multiple instances of a components)
* __Custom DOM Elements__ (new HTML elements e.g. just for biological data)

Everyone is familiar with HTML and can add a `<button>` DOM element to their website. Why not let them add a `<biojs-msa>` element?

Imagine to include an multiple sequence alignment into your website with a short HTML snippet like this:

{% highlight javascript %}
<biojs-msa>
  <biojs-io-fasta url="./Q7T2N8.fasta" />
</biojs-msa>
{% endhighlight %}

Why now?
--------

* The first official release of Polymer (version 1.0) was at this year's Google I/O (2015-05-29)
* The Polymer project worked hard to reduce the Web Component polyfill to a lightweight shim
* Supported in Chrome since version 36
* Web components will be the __future__!

Not convinced yet?
------------------

Have a look at the presentations listed at [webcomponents.org](http://webcomponents.org/presentations/) - especially:

* [Polymer and modern web APIs: In production at Google scale](https://www.youtube.com/watch?v=fD2As5RmM8Q) at this year'S Google I/O by the Polymer dev team
* [Why you should be using Web Components now. And how](https://leggetter.github.io/web-components-now/dunddd-2014/#1) by Phil Leggetter (@leggetter)
* [Componentize The Web: Back To The Browser!](https://www.youtube.com/watch?v=GOPXVLxp9Nc) by Addy Osmani
(@addyosmani)
* [Polymer and Web Components change everything you know about Web development](https://www.youtube.com/watch?v=8OJ7ih8EE7s) by Eric Bidelman (@ebidel)
* [A future called Web Components](https://vimeo.com/97308701) by Zeno Rocha (@zenorocha)

What is the roadmap?
---------------------

Our roadmap is work in progress, please look at our [github wiki](https://github.com/biojs/biojs3/wiki).


How to help?
------------

Our development and brainstorming is happening at [github](https://github.com/biojs/biojs3) - you are welcomed to join us.

* If you have an idea, proposal -> don’t hesitate to open an issue
* If you want to port your (or a) component to polymer -> go for it & discuss your progress with us on github :)
* Have a look at our [open points](https://github.com/biojs/biojs3/wiki) & get inspired
* If you haven't found a task yet, browse through the open issues or ping us on [gitter](https://gitter.im/biojs/biojs)

A huge thanks goes to everyone from the specification team at yesterday's BioJS hackathon ([@herkulano](https://github.com/herkulano), [@Shadowbeetle](https://github.com/Shadowbeetle), [@greenify](https://github.com/greenify)) and to all pioneer ([@phidias51](https://github.com/phidias51), [@mhelvens](https://github.com/mhelvens), [@emepyc](https://github.com/mhelvens)) who have suggested this in the past!

Cheers and looking forward to see your ideas on github!

The BioJS3 team
