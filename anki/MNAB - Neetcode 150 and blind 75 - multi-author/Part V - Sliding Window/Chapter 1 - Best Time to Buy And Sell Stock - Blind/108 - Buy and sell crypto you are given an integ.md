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

What is the space complexity of the optimal solution?

A) O(1)

B) O(n)

C) O(n^2)

D) O(2^n)  

========== Answer ==========  

**Answer**: A

The optimal solution has a constant space complexity, O(1), as we are only keeping track of two variables (minimum price and maximum profit), regardless of the size of the input array.

========== Id ==========  
108

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Sliding Window::Chapter 1 - Best Time to Buy And Sell Stock - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Sliding-Window::#Chapter-1-Best-Time-to-Buy-And-Sell-Stock-Blind::#108-Buy-and-sell-crypto-you-are-given-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
