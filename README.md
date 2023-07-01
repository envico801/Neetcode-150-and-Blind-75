# Neetcode 150 and Blind 75

📘 Collection of 225 leetcode problems. Includes solutions and quizzes/questions/tests in flashcards format (Anki) to learn patterns/techniques.

## Problems

> Table of problems

## Practice questions

**Disclaimer**: Some of the questions are taken from [https://neetcode.io/practice](https://neetcode.io/practice), only the questions that correspond to the "free" category were used, the content belongs to neetcode and is only being used for educational purposes.

### Contents

The questions in this section are designed to help you remember the patterns or techniques used throughout the problems. The problems are in a Q&A format, this is to facilitate the creation of a deck of Anki cards.

The order is based on the [roadmap created by neetcode](https://neetcode.io/roadmap)

> TOC

#### Arrays & Hashing

##### Contains Duplicate

Q: How many possible pairs of elements are there in an array of size n?  
A) log n  
B) n  
C) n^2  
D) 2^n  
A: **C) n^2**  
There are exactly n \* (n - 1) / 2 distinct pairs of integers in the array. This is equivalent to (n^2 - n) / 2, and we normally consider the largest term, which in this case is n^2.

Q: What is the time complexity of a brute force approach, where you compare every possible pair in the array to check if there are any duplicates?  
A) O(n)  
B) O(n \* log n)  
C) O(n^2)  
D) O(2^n)  
A: **C) O(n^2)**  
The brute-force solution using two nested loops has a time complexity of O(n^2) because for each element in the array, you need to iterate over up to n other elements.

Q: What data structure can you use to optimize the approach for checking if there are any duplicate elements in the array?  
A) Queue  
B) Priority Queue  
C) Stack  
D) Hashmap or HashSet  
A: **D) Hashmap or HashSet**  
A Hashmap (or Hashtable) and a HashSet allow us to store and retrieve values in constant time, O(1). We can utilize this property to efficiently check for duplicates.

Q: How can a HashSet be used to efficiently check for duplicates in the array?  
A) Iterate through each element in the array and try to insert it into the HashSet. If an insertion fails (the element already exists in the HashSet), return true to indicate a duplicate was found.  
B) Insert all elements from the array into the HashSet without checking for duplicates during this process. After all insertions, compare the size of the HashSet with the size of the array. If the HashSet size is smaller, return true to indicate a duplicate exists.  
C) Both A and B  
A: **C) Both A and B**  
A HashSet does not allow duplicate values. So, if you try to insert an element that already exists in the HashSet, it will not add the element and you know you've found a duplicate (choice A). Alternatively, you could add all elements to the HashSet and then compare its size to the size of the array. If the sizes are different, then there must have been a duplicate in the array (choice B). Both these methods will help identify if a duplicate exists in the array.

Q: What is the time and space complexity of the solution using a hashmap?  
A) Time complexity: O(n)  
Space complexity: O(n)  
B) Time complexity: O(n \* log n)  
Space complexity: O(n)  
C) Time complexity: O(n^2)  
Space complexity: O(1)  
D) Time complexity: O(n)  
Space complexity: O(1)  
A: **Time complexity: O(n)  
Space complexity: O(n)**  
The hashmap solution has a time complexity of O(n) because you need to iterate through the array once. Also, the key lookup operation with hashmaps runs in O(1) time. The space complexity is also O(n) because, in the worst case, you might need to store all n elements in the hashmap.
