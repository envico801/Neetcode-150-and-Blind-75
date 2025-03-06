========== Question ==========  

### Meeting Rooms

Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...] (si < ei)`, determine if a person could attend all meetings.

Note: `(0,8),(8,10)` is not a conflict at `8`

**Example1**

```
Input: intervals = [(0,30),(5,10),(15,20)]
Output: false
Explanation:
(0,30), (5,10) and (0,30),(15,20) will conflict
```

**Example2**

```
Input: intervals = [(5,8),(9,15)]
Output: true
Explanation:
Two times will not conflict
```

**Constraints:**

-   `0 <= intervals.length <= 10^4`

-   `intervals[i].length == 2`

-   `0 <= intervals[i][0] < intervals[i][1] <= 10^6`

---

What is the overall time and space complexity of the optimal solution for this problem?

```python
class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        intervals.sort() # Sort by start times

        for i in range(1, len(intervals)):
            if intervals[i][0] < intervals[i-1][1]: # Check for overlap
                return False # Conflict found

        return True # No conflict found
```

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n log n), Space complexity: O(n)

C) Time complexity: O(n log n), Space complexity: O(1)  

========== Answer ==========  

**Answer**: C

The overall time complexity of the solution is determined by the most time-consuming step. Sorting the intervals has a time complexity of O(n log n). After sorting, we iterate over the intervals once which has a time complexity of O(n). Therefore, the overall time complexity is O(n log n). The space complexity is O(1) because we do not use any additional data structures whose size depends on the input. Sorting the array in-place ensures that we do not use any extra space.

========== Id ==========  
220

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 4 - Meeting Rooms - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-4-Meeting-Rooms-Blind::#220-Meeting-rooms-given-an-array-of-meeting-ti

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
