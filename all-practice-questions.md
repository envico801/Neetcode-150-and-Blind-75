### Neetcode roadmap questions

#### Arrays and Hashing

1. [Contains Duplicate (Blind)](./Arrays-and-Hashing/Easy/README.md)  
   Q: How many possible pairs of elements are there in an array of size n?  
   A) log n  
   B) n  
   C) n^2  
   CI) 2^n  
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

2. Valid Anagram (Blind)
   Q: What is the primary characteristic of an anagram?  
   A) Both words have the same length.  
   B) Both words have the same letters, in the same quantities.  
   C) Both words have the same first letter.  
   D) Both words have the same last letter.  
   A: **B) Both words have the same letters, in the same quantities.**  
   An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. This means both words have the same letters, in the same quantities. For example, 'Heart' is an anagram of 'Earth'.

   Q: Given the nature of anagrams, which of the following methods can be used to check if two words are anagrams?  
   A) Compare the lengths of two words. If they are equal, the words are anagrams.  
   B) Convert each word to an array, sort the arrays, and then compare them.  
   C) Check if the first letter of the first word is present in the second word.  
   A: **B) Convert each word to an array, sort the arrays, and then compare them.**  
   By converting each word to an array, sorting the arrays, and then comparing them, we can confirm if two words are anagrams. This is because anagrams have the same letters in the same quantities. For example, after sorting either 'heart' and 'earth', the result is 'aehrt'.

   Q: What is the time complexity of the solution that sorts and then compares the arrays? Note: We are using an efficient sorting algorithm where we can't make any assumptions about the character set.  
   A) O(n)  
   B) O(n log n)  
   C) O(n^2)  
   D) O(2^n)  
   A: **B) O(n log n)**  
   The time complexity of sorting an array of n elements is O(n log n), and the time complexity of comparing two arrays is O(n). When considering the largest term, the time complexity of the solution becomes O(n log n).

   Q: Given the nature of anagrams and the constraints of the problem, can you improve upon the overall time complexity of the sorting solution?  
   A) No, sorting and comparing is the most optimal solution.  
   B) Yes, by using a hashmap to store the count of letters.  
   C) Yes, by checking if the first and last letter of both words are the same.  
   A: **B) Yes, by using a hashmap to store the count of letters.**  
   Given the constraints of the problem and the nature of anagrams, we can use a hashmap to store the count of letters for each string. This would allow us to compare the frequency of each letter in both strings in a more time-efficient way. The downside is we may need extra memory, compared to an in-place sorting algorithm.

   Q: If using a hashmap to check if two words are anagrams, what would be the keys and the values in the hashmap?  
   A) Keys = Words, Values = Count of each word  
   B) Keys = Letters, Values = Count of each letter  
   C) Keys = Length of words, Values = Words of that length  
   A: **B) Keys = Letters, Values = Count of each letter**  
   In this case, the keys would be the letters, and the values would be the count of each letter. This way, we can track the frequency of each letter in the strings and compare them.

   Q: What is the time and space complexity of the solution using a hashmap to count and compare the frequency of each letter?  
   A) Time complexity: O(n), Space complexity: O(n)  
   B) Time complexity: O(n log n), Space complexity: O(n)  
   C) Time complexity: O(n^2), Space complexity: O(1)  
   D) Time complexity: O(n), Space complexity: O(1)  
   A: **A) Time complexity: O(n), Space complexity: O(n)**  
   The time complexity of this solution is O(n) because we iterate over the input strings once. The space complexity is also O(n) because in the worst-case scenario (where each letter is unique), we would need to store each letter in the hashmap.

3. Two Sum (Blind)
   Q: Roughly how many pairs of integers are there within the array? Assume the size of the array is `n`.  
   A) log n  
   B) n  
   C) n^2  
   D) 2^n  
   A: **C) n^2**  
   There are exactly n \* (n - 1) / 2 distinct pairs of integers in the array. This is equivalent to (n^2 - n) / 2 and we normally care about the largest term, which in this case is n^2.

   Q: How can you find all pairs of elements `x1, x2` within an array, which have a different index?  
   A) Sorting the array and using binary search to find a pair  
   B) Using two nested loops to iterate over all pairs of elements  
   C) Using divide and conquer to recursively find pairs  
   A: **B) Using two nested loops to iterate over all pairs of elements**  
   To find all pairs of elements with different indices in the array, you can use two nested loops. The first loop iterates over each element, while the second loop only iterates over the elements to the right of the current element. This allows you to compare all possible pairs without duplicates.

   Q: After finding each pair of elements, we can then easily determine the indices of the elements that sum to the target. What is the time complexity of this brute-force solution?  
   A) O(n)  
   B) O(n \* log n)  
   C) O(n^2)  
   D) O(2^n)  
   A: **C) O(n^2)**  
   The brute-force solution using two nested loops has a time complexity of O(n^2) because for each element in the array, you need to iterate over up to n other elements.

   Q: For any given element `x` within the array, how many possible unique `y-values` would satisfy `target = x + y`?  
   A) 1  
   B) 2  
   C) n - 1  
   D) n  
   A: **A) 1**  
   We can solve this equation for y: y = target - x. For example, if target=9, and x=2, then y = 9 - 2 = 7. In mathematics, this value is known as the complement.

   Q: Can you reduce the time complexity of the algorithm to find the indices of two numbers that add up to the target using a data structure?  
   A) No, the time complexity cannot be reduced  
   B) Yes, using a priority queue  
   C) Yes, using a hashmap  
   D) Yes, using a balanced binary search tree  
   A: **C) Yes, using a hashmap**  
   Yes, you can reduce the time complexity using a hashmap. A hashmap allows you to store and retrieve values in O(1) - constant time, which can help you find the required indices more efficiently than a brute-force solution.

   Q: How can a hashmap be used to efficiently find the indices of two numbers that add up to the target in an array?  
   A) Key = Index of each element, Value = Difference between the target and the corresponding element;  
   then for each element check if the difference between the target and the element exists as a value in the hashmap.  
   B) Key = Each element in the array, Value = The index of the corresponding element;  
   then for each element check if the difference exists in the hashmap as a key, and that it has a different index from the current element.  
   A: **B) Key = Each element in the array, Value = The index of the corresponding element;  
   then for each element check if the difference exists in the hashmap as a key, and that it has a different index from the current element.**  
   By storing each element in the array as a key and its index as the corresponding value in the hashmap, you can efficiently find the required pair. For each element, you can efficiently calculate the difference and check if it’s a key within the hashmap. If it does, we can get the index from the hashmap. If the index of the difference is different from the index of the current element (remember we are not allowed reuse the same element twice), then you've found the solution.

   Q: What is the time and space complexity of the optimal solution using a hashmap?  
   A) Time complexity: O(n), Space complexity: O(n)  
   B) Time complexity: O(n \* log n), Space complexity: O(n)  
   C) Time complexity: O(n^2), Space complexity: O(1)  
   D) Time complexity: O(n), Space complexity: O(1)  
   A: **A) Time complexity: O(n), Space complexity: O(n)**  
   The hashmap solution has a time complexity of O(n) because you need to iterate through the array once. Also, the key lookup operation with hashmaps runs in O(1) time. The space complexity is also O(n) because, in the worst case, you might need to store all n elements in the hashmap.

4. Group Anagrams (Blind)
5. Top K Frequent Elements (Blind)
6. Product of Array Except Self (Blind)
7. Valid Sudoku
8. Encode and Decode Strings (Blind)
9. Longest Consecutive Sequence (Blind)

#### Two Pointers

1. Valid Palindrome (Blind)
2. Two Sum II
3. 3Sum (Blind)
4. Container With Most Water (Blind)
5. Trapping Rain Water

#### Sliding Window

1. Best Time to Buy and Sell Stock (Blind)
2. Longest Substring Without Repeating Characters (Blind)
3. Longest Repeating Character Replacement (Blind)
4. Permutation in String
5. Minimum Window Substring (Blind)
6. Sliding Window Maximum

#### Stack

1. Valid Parentheses (Blind)
2. Min Stack
3. Evaluate Reverse Polish Notation
4. Generate Parentheses
5. Daily Temperatures
6. Car Fleet
7. Largest Rectangle in Histogram

#### Binary Search

1. Binary Search
2. Search a 2D Matrix
3. Koko Eating Bananas
4. Search in Rotated Sorted Array (Blind)
5. Find Minimum in Rotated Sorted Array (Blind)
6. Time Based Key-Value Store
7. Median of Two Sorted Arrays

#### Linked List

1. Reverse Linked List (Blind)
2. Merge Two Sorted Lists (Blind)
3. Reorder List (Blind)
4. Remove Nth Node From End of List (Blind)
5. Copy List with Random Pointer
6. Add Two Numbers
7. Linked List Cycle (Blind)
8. Find the Duplicate Number
9. LRU Cache
10. Merge k Sorted Lists (Blind)
11. Reverse Nodes in k-Group

#### Trees

1. Invert Binary Tree (Blind)
2. Maximum Depth of Binary Tree (Blind)
3. Diameter of Binary Tree
4. Balanced Binary Tree
5. Same Tree (Blind)
6. Subtree of Another Tree (Blind)
7. Lowest Common Ancestor of a Binary Search Tree (Blind)
8. Binary Tree Level Order Traversal (Blind)
9. Binary Tree Right Side View
10. Count Good Nodes in Binary Tree
11. Validate Binary Search Tree (Blind)
12. Kth Smallest Element in a BST (Blind)
13. Construct Binary Tree from Preorder and Inorder Traversal (Blind)
14. Binary Tree Maximum Path Sum (Blind)
15. Serialize and Deserialize Binary Tree (Blind)

#### Trie

1. Implement Trie (Blind)
2. Design Add and Search Words Data Structure (Blind)
3. Word Search II (Blind)

#### Heap and Priority Queue

1. Kth Largest Element in a Stream
2. Last Stone Weight
3. K Closest Points to Origin
4. Kth Largest Element in an Array
5. Task Scheduler
6. Design Twitter
7. Find Median from Data Stream (Blind)

#### Backtracking

1. Permutations
2. Sudoku Solver
3. Subsets
4. Combination Sum (Blind)
5. Subsets II
6. Word Search (Blind)
7. Palindrome Partitioning
8. Letter Combinations of a Phone Number
9. N-Queens

#### Graphs

1. Number of Islands (Blind)
2. Clone Graph (Blind)
3. Max Area of Island
4. Pacific Atlantic Water Flow (Blind)
5. Surrounded Regions
6. Rotting Oranges
7. Walls and Gates
8. Course Schedule (Blind)
9. Course Schedule II
10. Redundant Connection
11. Number of Connected Components In An Undirected Graph (Blind)
12. Graph Valid Tree (Blind)
13. Word Ladder

#### Advance Graphs

1. Reconstruct Itinerary
