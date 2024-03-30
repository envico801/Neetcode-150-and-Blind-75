========== Question ==========  

### You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock
and choosing a **different day in the future** to sell that stock.

_Return the maximum profit you can achieve from this transaction. If you cannot
achieve any profit, return `0`._

Example 1:

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

---

We can also solve this by iterating through the array once, while keeping track
of just two values. What two values should we keep track of to maximize the
profit?

A) The maximum and minimum prices in the array.

B) The minimum price found so far and the maximum profit found so far.

C) The difference between each pair of prices and the maximum price found so
far.

D) The maximum profit found so far and the index of the minimum price found so
far.  

========== Answer ==========  

**Answer**: B

We should keep track of the minimum price found so far and the maximum profit
found so far. By keeping track of these two values, we can calculate the maximum
potential profit at each step while iterating through the array.

========== Id ==========  
61

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 1 - Best Time to Buy and Sell Stock Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-1-Best-Time-to-Buy-and-Sell-Stock-Blind::#61-You-are-given-an-array-prices-where-pri

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
