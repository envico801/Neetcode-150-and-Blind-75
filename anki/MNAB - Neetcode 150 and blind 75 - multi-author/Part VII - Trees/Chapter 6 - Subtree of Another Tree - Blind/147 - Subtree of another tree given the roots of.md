========== Question ==========  

### Subtree of Another Tree

Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

**Example 1:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/52b41f82-273f-4b31-83ea-f6895eb79200/public)

```
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
```

**Example 2:**

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/fc852005-42e7-434d-3514-e5c834361b00/public)

```
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
```

**Constraints:**

-   The number of nodes in the `root` tree is in the range `[1, 2000]`.

-   The number of nodes in the `subRoot` tree is in the range `[1, 1000]`.

-   `10^4 <= root.val <= 10^4`

-   `10^4 <= subRoot.val <= 10^4`

---

When trying to determine if a `subRoot` is a subtree of `root`, which kind of helper function might be beneficial to have?

A) A function to calculate the height of root and subroot

B) A function to compare two trees and check if they are identical  

========== Answer ==========  

**Answer**: B

A helper function that compares two trees to check if they are identical can be useful. We can use it every time we find a node in `root` that is the same as the root of `subRoot`. We then compare the entire structure starting from this node with `subRoot` using this helper function.

========== Id ==========  
147

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part VII - Trees::Chapter 6 - Subtree of Another Tree - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-VII-Trees::#Chapter-6-Subtree-of-Another-Tree-Blind::#147-Subtree-of-another-tree-given-the-roots-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
