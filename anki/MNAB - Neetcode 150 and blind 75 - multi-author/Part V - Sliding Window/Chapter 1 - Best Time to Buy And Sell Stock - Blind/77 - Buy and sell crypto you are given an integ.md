========== Question ==========  

### Buy and Sell Crypto

You are given an integer array `prices` where `prices[i]` is the price of NeetCoin on the `ith` day.

You may choose a **single day** to buy one NeetCoin and choose a **different day in the future** to sell it.

Return the maximum profit you can achieve. You may choose to **not make any transactions**, in which case the profit would be `0`.

**Example 1:**

```
Input: prices = [10,1,5,6,7,1]
Output: 6
```

Explanation: Buy `prices[1]` and sell `prices[4]`, `profit = 7 - 1 = 6`.

**Example 2:**

```
Input: prices = [10,8,7,5,2]
Output: 0
```

Explanation: No profitable transactions can be made, thus the max profit is 0.

**Constraints:**

-   `1 <= prices.length <= 100`

-   `0 <= prices[i] <= 100`

---

How will we use the minimum price found so far and the maximum profit found so far to efficiently solve this problem?

A) Using Kadane’s greedy algorithm.

B) Find the minimum price in the array, and for every other price compute the profit, until we find the maximum profit.

C) Iterate through the prices, if we find a new minimum price then update it. Compute the profit between the current price and the minimum price, if it exceeds the maximum profit, then update it.  

========== Answer ==========  

**Answer**: C

We iterate through the prices, and for each price, if it is lower than the current minimum price, we update the minimum price. Then, we compute the profit by subtracting the current minimum from the current price. If this profit is greater than the current maximum profit, we update the maximum profit.

========== Id ==========  
77

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 1 - Best Time to Buy And Sell Stock - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-1-Best-Time-to-Buy-And-Sell-Stock-Blind::#77-Buy-and-sell-crypto-you-are-given-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
