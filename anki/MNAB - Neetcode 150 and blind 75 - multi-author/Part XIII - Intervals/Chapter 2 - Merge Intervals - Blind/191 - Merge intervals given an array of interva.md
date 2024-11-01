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

Given an unsorted list of intervals, in what order should we arrange the intervals to simplify the process of merging overlaps?

A) Sort by the start times of each interval

B) Sort by the lengths of each interval

C) The order doesn't matter  

========== Answer ==========  

**Answer**: A

Sorting the intervals by their start times helps simplify the process of detecting and merging overlaps. Any overlapping intervals will be adjacent to each other in the sorted list.

========== Id ==========  
191

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 2 - Merge Intervals - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-2-Merge-Intervals-Blind::#191-Merge-intervals-given-an-array-of-interva

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
