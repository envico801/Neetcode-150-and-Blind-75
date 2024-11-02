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

To summarize, the below code will optimally solve this problem. What is the overall time and space complexity?

```python
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort()
        res = 0
        prevEnd = intervals[0][1]
        for start, end in intervals[1:]:
            if start >= prevEnd:
                # Curr interval is to the right of prev
                prevEnd = end
            else:
                # Intervals overlap, keep interval with smaller end
                res += 1
                prevEnd = min(end, prevEnd)
        return res
```

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n log n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)  

========== Answer ==========  

**Answer**: B

The time complexity of the optimal solution is O(n log n) because you have to sort the intervals first, which takes O(n log n) time. Then, you iterate over the sorted intervals once, which takes O(n) time. The space complexity is O(n) because in the worst-case scenario, you store all n intervals in the input array. The additional space used for sorting does not change the overall linear space complexity.

========== Id ==========  
208

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 3 - Non Overlapping Intervals - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-3-Non-Overlapping-Intervals-Blind::#208-Non-overlapping-intervals-given-an-array-o

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
