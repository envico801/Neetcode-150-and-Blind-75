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

We can try to iterate through the intervals to count how many meetings are going on at any given point in time. What should be our first step?

A) By sorting the start and end times in separate arrays

B) By sorting the intervals by start time

C) By sorting the intervals by length  

========== Answer ==========  

**Answer**: A

Sorting the start and end times separately allows us to efficiently track when meetings start and end. This makes it easy to count the number of meetings at any given time.

========== Id ==========  
206

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part XIII - Intervals::Chapter 5 - Meeting Rooms II - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-XIII-Intervals::#Chapter-5-Meeting-Rooms-II-Blind::#206-Meeting-rooms-ii-given-an-array-of-meeting

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
