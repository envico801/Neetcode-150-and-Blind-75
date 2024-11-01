========== Question ==========  

### Insert Interval

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` _after the insertion_.

**Example 1:**

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

**Constraints:**

-   `0 <= intervals.length <= 10^4`

-   `intervals[i].length == 2`

-   `0 <= starti <= endi <= 10^5`

-   `intervals` is sorted by `starti` in **ascending** order.

-   `newInterval.length == 2`

-   `0 <= start <= end <= 10^5`

---

Is it possible that the `newInterval` overlaps with more than one interval in the list?

A) Yes

B) No  

========== Answer ==========  

**Answer**: A

Yes, it's possible. The `newInterval` might overlap with multiple intervals in the list if its start time is earlier than the end of one interval and its end time is later than the start of another.

========== Id ==========  
178

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 1 - Insert Interval - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-1-Insert-Interval-Blind::#178-Insert-interval-you-are-given-an-array-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
