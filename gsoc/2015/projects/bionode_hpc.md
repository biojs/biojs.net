---
layout: gsoc 
title: Bionode distribution on HPC Grid
gsoc: 2015
---

Rationale & Approach
--------------------

Bionode pipelines can currently only run on one machine, but we would like them to be able to scale and be distributed across nodes of a high performance computing cluster (HPC). There are several ways to distribute Node apps across several CPUs/Machines using native Node.js or libraries but for a scenario were the user does not have administrative access to the cluster and must rely on established queuing tools (i.e., Sun Grid Engine) integrating/wrapping Bionode around those tools might be the best approach.

Challenges
------------

* Development will require access to a cluster of several machines or a simulated environment. We already have a [Docker container that provides Sun Grid Engine](http://github.com/gawbul/docker-sge).
* If the student is interested in using Node.js queuing/distribution libraries, it will require a review of the existing options and adapting to bionode pipelines.
* If the student has more interest or experience with other queuing systems, it will require wrapping those systems with bionode/node.js code.
* We only expect the student to do one approach, but a very skilled student could do both.

Involved Tools / Libraries
-------------------------

* Node queuing systems
* Other queuing systems (i.e. SGE)

Needed Skills
-------------

* Node.js/JavaScript
* HPC experience
* Docker (could be useful for development)

Mentors
-------

[Steve Moss](http://about.me/gawbul) and [Max Ogden](http://maxogden.com/)  
