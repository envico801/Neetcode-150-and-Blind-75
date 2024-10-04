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

What is the brute-force approach to solving this problem?

A) Sorting the array and running binary search to find the difference between the minimum and maximum prices.

B) Calculating the profit for each valid pair of buying and selling days, and finding the maximum profit.

C) Sorting the array and finding the difference between the minimum and maximum prices.

D) Creating a new array with the differences between consecutive prices and finding the maximum difference.  

========== Answer ==========  

**Answer**: B

The correct brute-force approach is to calculate the profit for each valid pair of buying and selling days, and then find the maximum profit. For each day, we calculate the profit for every other day in the future. We keep track of the maximum profit seen.

========== Id ==========  
75

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 1 - Best Time to Buy And Sell Stock - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-1-Best-Time-to-Buy-And-Sell-Stock-Blind::#75-Buy-and-sell-crypto-you-are-given-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
