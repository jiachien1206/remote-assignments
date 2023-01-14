/* Use Binary Search to return the position of target in the numbers array */

// Recursion
function binarySearchPosition(numbers, target) {
    function search(start, end) { 
        const mid = start + Math.floor((end - start) / 2);
        if (target < numbers[mid]) {
            return search(start, mid - 1);      // Use the new middle point's left number as the new upper limit
        } else if (target > numbers[mid]) {
            return search(mid + 1, end);        // Use the new middle point's right number as the new lower limit
        } else { 
            return mid;                         // Return position when the numbers[mid] is the target itself
        }
    }
    return search(0, numbers.length - 1);       // Use the search function for the first time.
}

// Loop
function binarySearchPosition2(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start < end) {                       // While lower limit and upper limit are not the same
        let middle = start + Math.floor((end - start) / 2);
        if (target < numbers[middle]) {
            end = middle - 1;                   // Use the new middle point's left number as the new upper limit
        } else if (target > numbers[middle]) {
            start = middle + 1;                 // Use the new middle point's right number as the new lower limit
        } else { 
            break;                              // Break the loop when the numbers[mid] is the target itself
        }
    }
    return Math.floor((end + start) / 2);       // If the target is already in the middle, it's still right
}


console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3