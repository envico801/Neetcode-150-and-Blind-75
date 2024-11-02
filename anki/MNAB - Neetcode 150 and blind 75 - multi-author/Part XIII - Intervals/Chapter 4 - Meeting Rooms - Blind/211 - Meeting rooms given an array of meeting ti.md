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

What should you do when two intervals overlap?

A) Combine both intervals and consider it as one.

B) Do nothing, proceed to the next pair.

C) Return false, indicating a conflict in the schedule.  

========== Answer ==========  

**Answer**: C

When two intervals overlap, it signifies a conflict in the meeting schedule. Since our aim is to check if a person could attend all meetings, once a conflict is found, we can return false.

========== Id ==========  
211

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 4 - Meeting Rooms - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-4-Meeting-Rooms-Blind::#211-Meeting-rooms-given-an-array-of-meeting-ti

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
