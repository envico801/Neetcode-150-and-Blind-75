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
3. Two Sum (Blind)
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
