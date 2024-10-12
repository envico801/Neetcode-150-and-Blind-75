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

In the context of this problem, what’s an equivalent way of thinking about the minimum number of conference rooms needed?

A) The total number of meetings

B) The maximum number of overlapping intervals at any given point in time

C) The minimum number of overlapping intervals at any given point in time  

========== Answer ==========  

**Answer**: B

The minimum number of meeting rooms is equivalent to finding the maximum number of overlapping intervals at any given point in time. This is because each overlapping interval would require a separate room.

========== Id ==========  
192

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 5 - Meeting Rooms II - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-5-Meeting-Rooms-II-Blind::#192-Meeting-rooms-ii-given-an-array-of-meeting

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
