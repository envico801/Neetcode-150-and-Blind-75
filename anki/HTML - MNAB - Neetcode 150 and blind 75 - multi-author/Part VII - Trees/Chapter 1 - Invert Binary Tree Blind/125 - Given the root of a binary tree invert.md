==================== Question ====================  

### Given the `root` of a binary tree, invert the tree, and return _its root_.

![Binary Tree Inverted](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9aeb8e98-e369-4a36-2c82-be3efcab4f00/public)

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- The number of nodes in the tree is in the range `[0, 100]`.

- `-100 <= Node.val <= 100`

---

What does this binary tree look like after it has been inverted? ![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/3632af86-32d0-4224-fd47-1a9f311a8f00/public)

A) ![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/00d65115-0868-4312-8050-b1b039ecda00/public)

B) ![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/22600c7e-0bb6-4762-9959-370044446b00/public)  

==================== Answer ====================  

**Answer**: B

Inverting a binary tree means to make all left child nodes become right child nodes and vice versa. This is effectively the same as swapping the left and right child nodes for every node in the tree.

==================== Id ====================  
125

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 1 - Invert Binary Tree Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-1-Invert-Binary-Tree-Blind::#125-Given-the-root-of-a-binary-tree-invert

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
