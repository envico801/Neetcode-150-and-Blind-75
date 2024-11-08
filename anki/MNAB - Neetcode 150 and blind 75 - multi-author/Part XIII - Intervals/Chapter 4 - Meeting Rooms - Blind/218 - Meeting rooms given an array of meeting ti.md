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

As we iterate through the sorted intervals, how do we know if an adjacent pair of intervals is overlapping?

A) If start of the first interval < end of the second interval

B) If end of the first interval ≥ start of the second interval

C) If end of the first interval > start of the second interval  

========== Answer ==========  

**Answer**: C

If the intervals are sorted by their start times, then the end of the current interval being greater than the start of the next interval means they overlap and hence create a conflict in the meeting schedule. The reason ≥ doesn’t necessarily work is because a meeting could end as the next one begins, and it would be possible to attend both meetings.

========== Id ==========  
218

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 4 - Meeting Rooms - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-4-Meeting-Rooms-Blind::#218-Meeting-rooms-given-an-array-of-meeting-ti

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
