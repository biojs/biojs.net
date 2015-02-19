---
layout: gsoc 
title: RDF schema and path finder
gsoc: 2015
---

Rationale
---------

Biological entities, such as genes and proteins, are inherently connected and can form complex networks when aggregating data from multiple sources. Data providers are increasingly moving towards the Resource Description Framework (RDF) and a Linked Data approach for publishing data. RDF provides a mechanism to describe schemas that can capture the nature of the realtions that hold between entities. Effectivly documenting an RDF schema is crucial for users wanting to explore or query a linked dataset, however, adequate tooling to support both the visulaisation and explorating of datasets is currently lacking. 

This projects has two phases. During the Google Summer of Code part, we aim to finish phase 1 “Schema Visualization” and advance as much as possible to phase 2 “”Path finder”

### Schema Visualization

Different approaches exist for visualizing RDF (see [this overview](https://www.linkedin.com/groups/Tools-view-graphs-generated-RDF-86246.S.5886361156435599362?view=&item=5886361156435599362&type=member&gid=86246&trk=eml-b2_anet_digest-null-2-null&fromEmail=fromEmail&ut=2ZzMb32LXTJ6s1)). However, not to much has been done regarding visualization of schemas. This is the first problem we want to address.

### Path finder

Knowing a model schema is a good starting point, but more it is not enough when multiple datasets are involved. For traversing multiple datasets, direct links or short paths become convenient, they make it easier searching and data integration. [RelFinder](http://www.visualdataweb.org/relfinder.php) is useful to find paths between two entities in the same dataset but it does not work yet across multiple datasets. A more complex issue arises when only the starting point is known; for instance, from a chemical, what kind of entities in protein or gene datasets can I reach? That is the second problem we want to address.

Approach
--------

### Schema Visualization

Initially, we need to extract the high level entities used in an RDF dataset. For instance, multiple Gene Ontology (GO) terms migh be in used, but at the end all of them belong to the same broad type “GO term” thus in a schema we only want to see a link to “GO terms”. Once the schema parser has been obtained, then we can move to the visualization part.

For instance, a Gene Expression Atlas schema looks like:

![Gene expression Atlas RDF scheme]({{ site.baseurl }}gsoc/2015/img/rdf.jpg){: width="90%"}

### Path finder

We need to create direct links or short paths across multiple datasets in an automtic/semi-automatic way. You can find more info [here](http://ceur-ws.org/Vol-1282/lisc2014_submission_7.pdf and http://linkedscience.org/wp-content/uploads/2014/04/07-lisc_jupp_ebi_2014.pdf)

Challenges
----------

### Schema Visualization

* Handling large dataset in RDF schema
* Finding a common way to extract RDF schemas from multiple heterogeneous datasets
* Avoiding collision and overlapping in visualization

### Path finder

* Handling large dataset in RDF schema
* Creating direct links or short paths across multiple datasets

Involved toolkits or projects
-----------------------------

* Projects: BioJS, EBI-RDF, UniProt-RDF
* Toolkits: Gulp, browserify, jQuey, D3, mustache and any other JS library that the student might find convenient to address the problem.

Needed skills
------------

* Good understanding of JavaScrip development
* Basic understanding of RDF and Linked Data
* Some understanding of bioinformatics data might be an advantage but is not required

Mentors
------

Mentors: Leyla García (UniProt, EMBL-EBI) and Simon Jupp (Samples, Phenotypes and Ontologies, EMBL-EBI)
