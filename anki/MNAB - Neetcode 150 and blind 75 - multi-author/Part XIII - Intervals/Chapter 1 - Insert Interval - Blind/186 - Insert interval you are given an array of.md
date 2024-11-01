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

As we iterate through the list of intervals, how do we know if the `newInterval` does not overlap with any of the intervals in the remaining portion of the list? (i.e. it does not overlap with the current interval or any subsequent intervals)

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/1f41ea61-3124-453d-7545-b5d5168de700/public)

A) If the end of newInterval is less than the start time of the current interval.

B) If the start of newInterval is greater than the end time of the current interval.

C) Both A and B

D) None of the above  

========== Answer ==========  

**Answer**: A

If the end of newInterval is less than the start time of the current interval, newInterval does not overlap with the current interval or any subsequent intervals because the list is sorted in ascending order by start times.

========== Id ==========  
186

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 1 - Insert Interval - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-1-Insert-Interval-Blind::#186-Insert-interval-you-are-given-an-array-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
