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

How will we use the minimum price found so far and the maximum profit found so
far to efficiently solve this problem?

A) Using Kadane’s greedy algorithm.

B) Find the minimum price in the array, and for every other price compute the
profit, until we find the maximum profit.

C) Iterate through the prices, if we find a new minimum price then update it.
Compute the profit between the current price and the minimum price, if it
exceeds the maximum profit, then update it.  

========== Answer ==========  

**Answer**: C

We iterate through the prices, and for each price, if it is lower than the
current minimum price, we update the minimum price. Then, we compute the profit
by subtracting the current minimum from the current price. If this profit is
greater than the current maximum profit, we update the maximum profit.

========== Id ==========  
69

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 1 - Best Time to Buy and Sell Stock Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-1-Best-Time-to-Buy-and-Sell-Stock-Blind::#69-You-are-given-an-array-prices-where-pri

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
