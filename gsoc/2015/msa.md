#### MSA-Viewer
    
##### Rationale

Multiple (i.e. >2) sequence (i.e. protein or nucleic acid) alignments (MSA) are used to investigate the evolutionary relationships between those sequences. Researchers use it to explore numerous questions such as: identifying conserved active sites and structural domains; training HMMs (Hidden Markov Models) to search for other members of the gene family when new sequencing is carried out; locating conserved lengths that may indicate important spatial structural roles; and building phylogenetic trees. The alignment step itself is algorithmic, however the automatically generated output needs to be checked manually because none of the available computer programs are as good as an experienced scientist. Thus the need for visualization.

##### Approach

The goal is to implement a client-side MSA viewer accessible from the most common Web browsers (Chrome, Firefox). It must take as input PIR or CLUSTAL alignments (optionally MSF and BLC). The display itself should support different coloring schemes (Zappo, Taylor, hydorphobicity, and percent identity threshold) and visualization of particular sequences features (domains, trans-membrane, signal, active sites, etc.). Users will need to be able to choose the coloring scheme and hide/show (expand/collapase) selected rows of the alignment. The API must support integrating this widget with other bioJS components, particularly JS-Paint which is a phylogenetic tree viewer.

##### Challenges

* a
* b

##### Degree of difficulty and needed skills

* oo
* bb
