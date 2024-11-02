========== Question ==========  

### Non Overlapping Intervals

Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return _the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping_.

**Example 1:**

```
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
```

**Example 2:**

```
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
```

**Example 3:**

```
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
```

**Constraints:**

-   `1 <= intervals.length <= 10^5`

-   `intervals[i].length == 2`

-   `5 * 10^4 <= starti < endi <= 5 * 10^4`

---

Since overlapping intervals will be adjacent, which operation can simplify the process of finding overlaps?

A) Sorting the intervals by the start times.

B) Reversing the order of the intervals.

C) Shuffling the intervals randomly.  

========== Answer ==========  

**Answer**: A

Sorting the intervals by their start times helps in aligning the intervals in increasing order. It simplifies the process of finding overlapping intervals because once the list is sorted, we can simply compare each interval with its next one to check for overlaps.

========== Id ==========  
205

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 3 - Non Overlapping Intervals - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-3-Non-Overlapping-Intervals-Blind::#205-Non-overlapping-intervals-given-an-array-o

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
