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

What is the brute-force approach to solving this problem?

A) Sorting the array and running binary search to find the difference between the minimum and maximum prices.

B) Calculating the profit for each valid pair of buying and selling days, and finding the maximum profit.

C) Sorting the array and finding the difference between the minimum and maximum prices.

D) Creating a new array with the differences between consecutive prices and finding the maximum difference.  

==================== Answer ====================  

**Answer**: B

The correct brute-force approach is to calculate the profit for each valid pair of buying and selling days, and then find the maximum profit. For each day, we calculate the profit for every other day in the future. We keep track of the maximum profit seen.

==================== Id ====================  
46

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part III - Sliding Window::Chapter 1 - Best Time to Buy and Sell Stock Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-III-Sliding-Window::#Chapter-1-Best-Time-to-Buy-and-Sell-Stock-Blind::#46-You-are-given-an-array-prices-where-pri

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
