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

As we iterate through these sorted arrays, `start` and `end`, how do we know if a meeting has ended?

A) start\[s\] < end\[e\]

B) start\[s\] == end\[e\]

C) end\[e\] <= start\[s\]  

========== Answer ==========  

**Answer**: C

If the end time of the current earliest ending meeting (end\[e\]) is less than or equal to the start time of the next meeting (start\[s\]), it indicates that a current meeting has ended. We don’t necessarily know the start time of this meeting, but we can still keep track of the number of ongoing meetings which is our goal.

========== Id ==========  
195

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 5 - Meeting Rooms II - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-5-Meeting-Rooms-II-Blind::#195-Meeting-rooms-ii-given-an-array-of-meeting

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
