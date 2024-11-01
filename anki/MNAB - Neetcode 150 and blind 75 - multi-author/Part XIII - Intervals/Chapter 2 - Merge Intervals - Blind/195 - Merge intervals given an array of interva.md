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

What is the overall time and space complexity of the optimal solution considering the sorting process and the merging process?

```python
class Solution:
  def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort()
    output = [intervals[0]]
    for start, end in intervals[1:]:
      prevEnd = output[-1][1]
      if prevEnd >= start:
        output[-1][1] = max(prevEnd, end) # merge
      else:
        output.append([start, end])
    return output
```

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n log n), Space complexity: O(n)

C) Time complexity: O(n), Space complexity: O(1)  

========== Answer ==========  

**Answer**: B

The overall time complexity of the solution is determined by the most time-consuming step. Sorting the intervals has a time complexity of O(n log n), while merging has a time complexity of O(n). Therefore, the overall time complexity is O(n log n). The space complexity is O(n) because in the worst-case scenario, if no intervals overlap, the output will be a list with the same length as the input. We also use some additional space for sorting the intervals, but this does not change the overall linear space complexity.

========== Id ==========  
195

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 2 - Merge Intervals - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-2-Merge-Intervals-Blind::#195-Merge-intervals-given-an-array-of-interva

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
