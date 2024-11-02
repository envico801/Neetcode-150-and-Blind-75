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

Given an unsorted list of intervals, what is the first step we should take to determine if a person could attend all meetings?

A) Sort by the start times of each interval

B) Sort by the length of each interval  

========== Answer ==========  

**Answer**: A

Sorting the intervals by their start times will help us to check the conflicts easily. The intervals will be arranged in a way that their start times are in ascending order.

========== Id ==========  
209

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 4 - Meeting Rooms - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-4-Meeting-Rooms-Blind::#209-Meeting-rooms-given-an-array-of-meeting-ti

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
