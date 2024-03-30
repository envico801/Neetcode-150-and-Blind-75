========== Question ==========  

### A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome,** or `false`
otherwise.

**Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

**Constraints:**

`1 <= s.length <= 2 * 10^5`

`s consists only of printable ASCII characters.`

---

Is there a way to check if a string is a palindrome without creating a new
string for the reversed version?

A) No, it's not possible.

B) Yes, by using two pointers.

C) Yes, by sorting the string.

D) Yes, by using a stack.  

========== Answer ==========  

**Answer**: B

Yes, it is possible. You can use two pointers: one starting from the beginning
of the string and the other from the end. If the characters at both pointers are
equal, we increment the left pointer and decrement the right pointer. If they
are not equal, then the string is not a palindrome. This approach avoids
creating a new string for the reversed version, thus saving space.

========== Id ==========  
40

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 1 - Valid Palindrome Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-1-Valid-Palindrome-Blind::#40-A-phrase-is-a-palindrome-if-after-con

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
