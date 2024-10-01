========== Question ==========  

### Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/1168b33f-0718-49d2-3991-d2e92b1ae500/public)

```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/753a6eeb-7153-4c61-096f-438a4ccd9400/public)

```
Input: p = [1,2], q = [1,null,2]
Output: false
```

**Example 3:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/76cda15a-858b-4702-d319-badd1fb6da00/public)

```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

**Constraints:**

-   The number of nodes in both trees is in the range `[0, 100]`.

-   `10^4 <= Node.val <= 10^4`

---

If the base case does _not_ hold, what should be checked to confirm whether the two subtrees are the same?

A) Compare the values of the nodes and check if the left and right subtrees of the nodes are the same.

B) Check if the left subtree of one node is the same as the right subtree of the other node.

C) Compare only the values of the nodes.  

========== Answer ==========  

**Answer**: A

If both nodes are not null, we need to check if the values of the nodes are the same and if the left subtree of the first node is the same as the left subtree of the second node, and the same for the right subtrees.

========== Id ==========  
137

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 5 - Same Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-5-Same-Tree-Blind::#137-Given-the-roots-of-two-binary-trees-p-an

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
