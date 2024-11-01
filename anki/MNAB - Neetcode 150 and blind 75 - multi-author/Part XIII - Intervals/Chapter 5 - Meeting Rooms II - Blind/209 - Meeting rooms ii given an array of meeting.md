========== Question ==========  

### Meeting Rooms II

Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...] (si < ei)`, find the minimum number of conference rooms required.

**Example1**

```
Input: intervals = [(0,30),(5,10),(15,20)]
Output: 2
Explanation:
We need two meeting rooms
room1: (0,30)
room2: (5,10),(15,20)
```

**Example2**

```
Input: intervals = [(2,7)]
Output: 1
Explanation:
Only need one meeting room
```

**Constraints:**

-   `0 <= intervals.length <= 10^4`

-   `intervals[i].length == 2`

-   `0 <= intervals[i][0] < intervals[i][1] <= 10^6`

---

To summarize, the below code will solve this problem optimally. What is the overall time and space complexity?

```python
class Solution:
    def minMeetingRooms(self, intervals):
        # Separate out the start and the end timings and sort them individually.
        start = sorted([i[0] for i in intervals])
        end = sorted(i[1] for i in intervals)
        s = e = 0
        used_rooms, res = 0, 0
        while s < len(intervals):
            if start[s] < end[e]:
                # A new meeting is starting
                used_rooms += 1
                s += 1
            else:
                # A current meeting is ending
                used_rooms -= 1
                e += 1
            res = max(res, used_rooms)
        return res
```

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n log n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(n)  

========== Answer ==========  

**Answer**: B

Sorting the start and end times has a time complexity of O(n log n). The subsequent iteration over the start times doesn't change the time complexity, so the overall time complexity remains O(n log n). The space complexity is O(n) because we store the start times and end times of all meetings separately.

========== Id ==========  
209

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 5 - Meeting Rooms II - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-5-Meeting-Rooms-II-Blind::#209-Meeting-rooms-ii-given-an-array-of-meeting

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
