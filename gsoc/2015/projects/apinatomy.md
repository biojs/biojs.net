---
layout: gsoc 
title: Introduction to ApiNATOMY
---

The human body consists of many organs and interacting systems. While multiple efforts exist to visualize various parts of human anatomy and explain physiological processes in our bodies, it is notoriously difficult to produce detailed models and views of various systems at different scales suitable for the use by biomedical professionals (students, researchers, pharma companies). ApiNATOMY (http://www.apinatomy.org/home) is an open-source graphical toolkit for interactive knowledge management that would allow biomedical experts to automatically generate views and plans of body organs and interaction systems using data knowledge bases and ontologies.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QtnrA25n19U" frameborder="0" allowfullscreen></iframe>

At the heart of ApiNATOMY are scalable and zoomable plans build using treemapping: a method for displaying hierarchical data by nested rectangles, called tiles. Each tile occupies area proportional to some data dimension or allocated to it by a user. Relative positions of tiles are respected and kept invariant across layers. On top of tiles, we display graphs that show relations among entities (e.g., body organs) represented by rectangles. We call such interconnected tiles circuit boards. Circuit boards can be used to schematically model e.g., vascular or neural body systems. In addition to circuit boards, ApiNATOMY toolkit displays 2d and 3d objects associated with tiles and connectors.
