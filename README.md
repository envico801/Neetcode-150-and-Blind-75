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
