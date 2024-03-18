---
order: 2000
layout: default
toc: true
---


# Huffman Coding


## Encoding Nodes

Involves sorting image characters by frequency, combining the two least frequent characters into a new node (with their combined frequency), Then, we insert this node back into the list.

For example...


This process is repeated until there's only one element left, which becomes the root of the Huffman tree. To encode a character, traverse the tree from the root, marking 0 for left branches and 1 for right branches. 


## Decoding


