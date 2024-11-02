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

When two intervals overlap, which should we remove?

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/daf9f6f4-c822-43cd-6d08-63db0a4a4b00/public)

A) The interval with the earliest start time.

B) The interval with the latest end time.

C) The smallest interval.  

========== Answer ==========  

**Answer**: B

The optimal strategy is to always remove the interval with the latest end time among the overlapping intervals. This is because it leaves more room for the rest of the intervals to fit in without overlapping.

========== Id ==========  
207

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 3 - Non Overlapping Intervals - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-3-Non-Overlapping-Intervals-Blind::#207-Non-overlapping-intervals-given-an-array-o

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
