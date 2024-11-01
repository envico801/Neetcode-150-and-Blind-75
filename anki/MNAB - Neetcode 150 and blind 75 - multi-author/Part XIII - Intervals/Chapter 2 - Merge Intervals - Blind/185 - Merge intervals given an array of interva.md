========== Question ==========  

### Merge Intervals

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return _an array of the non-overlapping intervals that cover all the intervals in the input_.

**Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:**

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

**Constraints:**

-   `1 <= intervals.length <= 10^4`

-   `intervals[i].length == 2`

-   `0 <= starti <= endi <= 10^4`

---

After sorting the intervals by start times, how can we determine if two intervals overlap?

A) End of the first interval > Start of the second interval

B) End of the first interval ≥ Start of the second interval  

========== Answer ==========  

**Answer**: B

If the intervals are sorted by their start times, then the end of the current interval being greater than or equal to the start of the next interval means they overlap.

========== Id ==========  
185

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 2 - Merge Intervals - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-2-Merge-Intervals-Blind::#185-Merge-intervals-given-an-array-of-interva

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
