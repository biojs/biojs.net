---
layout: gsoc 
title: Gene browser
gsoc: 2015
---

Rationale
---------

Do you want to contribute to the next generation of open-source genomics tools?  
JBrowse is a fast, embeddable, open-source, genome browser built completely with JavaScript and HTML5 with a well-established user-base. 
It is highly extensible with a rich plugin architecture that is used by the Apollo collaborative curation tool, and many other open-source projects and organizations.

<figure>
	<a href="http://jbrowse.org/code/latest-release/?data=%2Fgenomes%2Fflybase-dmel-5.52-genes&loc=2L%3A10283901..10390066&tracks=DNA%2CGenes">
	<img src="{{ site.baseurl }}gsoc/2015/img/jbrowse.jpg" alt="Screenshot of JBrowse" style="max-height: 400px; max-width: 90%">
	</a>
	<figcaption>Fig. 1: Exploring Drosophila melanogaster genes in JBrowse</figcaption>
</figure>

Approach
--------

We are modularizing JBrowse and integrating it into the [BioJS](http;//biojs.net) framework of bioinformatics JavaScript / HTML5 components that is built upon the [node package manager](https://www.npmjs.com/).   
This will allow our packages to be used by more people in the open-source community and provide a build-system more in-line with modern web applications.

If you are experienced with JavaScript and frameworks such as npm and have experience with scripting languages, this is the Google Summer of Code experience for you! Familiarity with Perl and Bioinformatics will be also helpful.

Mentors
-------

[Nathan Dunn](http://www.berkeleybop.org/person/nathan-dunn) and Miguel Pignatelli
