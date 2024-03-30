==================== Question ====================  

### You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

_Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`._

Example 1:

<!-- codeblock-start -->
<pre><code>Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
</code></pre>
<!-- codeblock-end -->

---

What is the time complexity of the optimal solution?

A) O(1)

B) O(n)

C) O(n^2)

D) O(2^n)  

==================== Answer ====================  

**Answer**: B

The optimal solution has a time complexity of O(n), where n is the number of days (or the length of the input array). This is because we're iterating through the array just once.

==================== Id ====================  
63

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 1 - Best Time to Buy and Sell Stock Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-1-Best-Time-to-Buy-and-Sell-Stock-Blind::#63-You-are-given-an-array-prices-where-pri

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
