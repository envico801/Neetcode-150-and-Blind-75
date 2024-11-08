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

As we iterate through the sorted intervals, how do we know if the current interval does _not_ overlap with the previous interval?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/4ba3ef8f-eb81-465b-3c7b-741329d31a00/public)

A) If the end time of the current interval is less than the start time of the previous interval.

B) If the start time of the current interval is greater than or equal to the end time of the previous interval.

C) If the end time of the current interval is equal to the start time of the previous interval.  

========== Answer ==========  

**Answer**: B

If the start time of the current interval is greater than or equal to the end time of the previous interval, it means there is no overlap. The current interval starts only after the previous one ends.

========== Id ==========  
214

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 3 - Non Overlapping Intervals - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-3-Non-Overlapping-Intervals-Blind::#214-Non-overlapping-intervals-given-an-array-o

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
