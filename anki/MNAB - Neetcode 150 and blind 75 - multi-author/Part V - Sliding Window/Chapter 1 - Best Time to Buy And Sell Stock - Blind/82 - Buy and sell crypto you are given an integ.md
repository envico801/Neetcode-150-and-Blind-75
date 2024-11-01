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

We can also solve this by iterating through the array once, while keeping track of just two values. What two values should we keep track of to maximize the profit?

A) The maximum and minimum prices in the array.

B) The minimum price found so far and the maximum profit found so far.

C) The difference between each pair of prices and the maximum price found so far.

D) The maximum profit found so far and the index of the minimum price found so far.  

========== Answer ==========  

**Answer**: B

We should keep track of the minimum price found so far and the maximum profit found so far. By keeping track of these two values, we can calculate the maximum potential profit at each step while iterating through the array.

========== Id ==========  
82

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 1 - Best Time to Buy And Sell Stock - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-1-Best-Time-to-Buy-And-Sell-Stock-Blind::#82-Buy-and-sell-crypto-you-are-given-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
