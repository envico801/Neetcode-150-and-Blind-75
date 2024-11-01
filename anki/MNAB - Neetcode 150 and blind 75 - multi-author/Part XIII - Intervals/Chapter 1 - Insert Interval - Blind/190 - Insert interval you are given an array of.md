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

To summarize, the below code will optimally solve this problem. What is the overall time complexity and the space complexity? Assume the output counts as additional space.

```python
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        res = []
        for i in range(len(intervals)):
            if newInterval[1] < intervals[i][0]:
                # newInterval doesn't overlap with remaining list
                res.append(newInterval)
                return res + intervals[i:]
            elif newInterval[0] > intervals[i][1]:
                # newInterval is entirely to right of intervals[i]
                res.append(intervals[i])
            else:
                # newInterval overlaps with current interval
                newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]
        res.append(newInterval)
        return res
```

A) Time complexity: O(1), Space complexity: O(n)

B) Time complexity: O(n), Space complexity: O(1)

C) Time complexity: O(n), Space complexity: O(n)  

========== Answer ==========  

**Answer**: C

The time complexity is O(n) because we may need to check each interval once, and the space complexity is O(n) because in the worst case, if `newInterval` doesn't overlap with any intervals, the output will be a list with the same length as the input plus one additional interval (`newInterval`). We also need some additional space to store the merged intervals during the process, but this does not change the overall linear space complexity.

========== Id ==========  
190

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 1 - Insert Interval - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-1-Insert-Interval-Blind::#190-Insert-interval-you-are-given-an-array-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
