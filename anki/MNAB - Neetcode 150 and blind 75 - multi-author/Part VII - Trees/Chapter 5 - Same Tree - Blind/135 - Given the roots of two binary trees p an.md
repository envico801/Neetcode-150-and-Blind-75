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

What would be a base case to check if two subtrees `p` and `q` are the same in the recursive approach to this problem?

A) When both p and q are null.

B) When either p or q is null.  

========== Answer ==========  

**Answer**: A

The base case for this problem is when both nodes are null. If both nodes are null, then we can say they are the same.

========== Id ==========  
135

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 5 - Same Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-5-Same-Tree-Blind::#135-Given-the-roots-of-two-binary-trees-p-an

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store