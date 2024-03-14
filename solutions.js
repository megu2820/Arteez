// Language used - Javascript
// Solution for Question 1 and 2 can be solved using below function implementation- 

function solution(A) {
    const n = A.length;
    let maxSideLength = 0;

    // Iterate through each cell to find the largest square containing only black cells
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            let sideLength = 0;
            const minBlackCount = Math.min(A[row], A[col]);
            
            // Check if a square can be formed
            for (let i = 0; i < minBlackCount; i++) {
                if (A[row + i] >= minBlackCount && A[col + i] >= minBlackCount) {
                    sideLength = i + 1;
                } else {
                    break;
                }
            }

            maxSideLength = Math.max(maxSideLength, sideLength);
        }
    }

    return maxSideLength;
}

// Test the function
console.log(solution([1, 2, 5, 3, 1, 3])); // Output should be 2------> question 1 solution 
console.log(solution([3, 3, 3, 5, 4])); // Output should be 3------> question 2 solution

// Solution for Question no 3 
// Using optimized approach of binary search with a time complexity of O(N log N).
// Algo description- 

// 1. Binary Search for Maximum Side Length:

// We initialize a binary search to find the maximum possible side length of a black square.
// We set the lower bound low to 1 and the upper bound high to n, where n is the length of array A.
// We iterate until low is less than or equal to high.
// At each iteration, we calculate the middle value mid as the average of low and high.
// We check if a square of side length mid is possible using the isSquarePossible function.
// If it's possible, we update maxSideLength to mid and update low to mid + 1 to search for larger squares.
// Otherwise, we update high to mid - 1 to search for smaller squares.

// 2. Check if a Square of Given Side Length is Possible:

// The isSquarePossible function takes the array A and a side length as input.
// It iterates through the array A.
// It maintains a variable consecutive to track the number of consecutive elements in A that are greater than or equal to the given side length.
// If the number of consecutive elements reaches or exceeds the given side length, it returns true, indicating that a square of the given side length is possible.
// Otherwise, it returns false.

// 3. Return the Maximum Side Length:

// After the binary search completes, we return the maxSideLength, which represents the maximum possible side length of a black square in the array A.

//Code 
function solution(A) {
    const n = A.length;
    let maxSideLength = 0;

    // Calculate the maximum possible side length
    let low = 1;
    let high = n;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (isSquarePossible(A, mid)) {
            maxSideLength = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return maxSideLength;
}

function isSquarePossible(A, sideLength) {
    const n = A.length;
    let consecutive = 0;

    for (let i = 0; i < n; i++) {
        if (A[i] >= sideLength) {
            consecutive++;
        } else {
            consecutive = 0;
        }

        if (consecutive >= sideLength) {
            return true;
        }
    }

    return false;
}

// Test the function
console.log(solution([6, 5, 5, 6, 2, 2])); // Output should be 4




