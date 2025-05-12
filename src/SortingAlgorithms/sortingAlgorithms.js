/*All code seen up to line 82 was recevied from a tutorial linked and mentioned in the readme file. This code's purpose is to animate the merge
sort function as seen on the website. The rest of the code is original and its purpose is to write the rest of the algorithms
*/
// Exports the function to get merge sort animations
export function getMergeSortAnimations(array) {
  // Array to store the animations
  const animations = [];
  
  // If the array has 1 or 0 elements, it's already sorted
  if (array.length <= 1) return array;
  
  // Create a copy of the array to use as auxiliary storage
  const auxiliaryArray = array.slice();
  
  // Start the merge sort process
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  
  // Return the list of animations
  return animations;
}

// Recursive function to perform merge sort
function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx >= endIdx) return; // Base case: single element or invalid range
  
  // Find the middle index
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  
  // Recursively sort the left and right halves
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  
  // Merge the sorted halves
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

// Function to merge two sorted halves
function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  let k = startIdx; // Starting index of the merge
  let i = startIdx; // Starting index for the left half
  let j = middleIdx + 1; // Starting index for the right half
  
  // Merge the two halves into mainArray
  while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]); // Mark comparison
      animations.push([i, j]); // Revert color
      
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
          animations.push([k, auxiliaryArray[i]]); // Update value in mainArray
          mainArray[k++] = auxiliaryArray[i++]; // Copy value from left half
      } else {
          animations.push([k, auxiliaryArray[j]]); // Update value in mainArray
          mainArray[k++] = auxiliaryArray[j++]; // Copy value from right half
      }
  }
  
  // Copy any remaining elements from the left half
  while (i <= middleIdx) {
      animations.push([i, i]); // Mark comparison
      animations.push([i, i]); // Revert color
      animations.push([k, auxiliaryArray[i]]); // Update value in mainArray
      mainArray[k++] = auxiliaryArray[i++]; // Copy value from left half
  }
  
  // Copy any remaining elements from the right half
  while (j <= endIdx) {
      animations.push([j, j]); // Mark comparison
      animations.push([j, j]); // Revert color
      animations.push([k, auxiliaryArray[j]]); // Update value in mainArray
      mainArray[k++] = auxiliaryArray[j++]; // Copy value from right half
  }
}
// Main function to get bubble sort animations
export function getBubbleSortAnimations(array) {
  const animations = [];
  
  // Copy the array to avoid modifying the original array directly
  const auxiliaryArray = array.slice();

  // If the array has 1 or 0 elements, there's no need to sort it
  if (auxiliaryArray.length <= 1) return animations;

  // Start the bubble sort process
  bubbleSortHelper(auxiliaryArray, animations);
  
  // Return the list of animations
  return animations;
}

// Helper function to perform bubble sort
function bubbleSortHelper(array, animations) {
  const n = array.length;

  // Perform bubble sort
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Push animation for comparison (highlighting the bars)
      animations.push([j, j + 1]);  // Mark the elements being compared
      animations.push([j, j + 1]);  // Revert color after comparison

      // If the current element is greater than the next, swap them
      if (array[j] > array[j + 1]) {
        // Push animation for swap (changing heights of the bars)
        animations.push([j, array[j + 1]]);   // Update the value at index j
        animations.push([j + 1, array[j]]);   // Update the value at index j + 1

        // Perform the actual swap in the array
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      } else {
        // Push no swap (to preserve the sequence for visual consistency)
        animations.push([j, array[j]]);   // Keep the same value at index j
        animations.push([j + 1, array[j + 1]]);  // Keep the same value at index j + 1
      }
    }
  }
}




/*Written by Paul Abruzzo*/
export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  const pivotIdx = partition(array, startIdx, endIdx, animations);
  quickSortHelper(array, startIdx, pivotIdx - 1, animations);
  quickSortHelper(array, pivotIdx + 1, endIdx, animations);
}

function partition(array, startIdx, endIdx, animations) {
  const pivotIdx = getMedianOfThree(array, startIdx, endIdx);
  const pivotValue = array[pivotIdx];
  animations.push(["selectPivot", pivotIdx]);

  // Move pivot to end
  [array[pivotIdx], array[endIdx]] = [array[endIdx], array[pivotIdx]];
  animations.push(["swap", pivotIdx, endIdx]);

  let i = startIdx;
  for (let j = startIdx; j < endIdx; j++) {
    animations.push(["compare", j, endIdx]);
    if (array[j] <= pivotValue) {
      animations.push(["swap", i, j]);
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
    animations.push(["compareEnd", j, endIdx]);
  }

  animations.push(["swap", i, endIdx]);
  [array[i], array[endIdx]] = [array[endIdx], array[i]];

  return i;
}

function getMedianOfThree(array, startIdx, endIdx) {
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const startVal = array[startIdx];
  const midVal = array[midIdx];
  const endVal = array[endIdx];

  if ((startVal <= midVal && midVal <= endVal) || (endVal <= midVal && midVal <= startVal)) {
    return midIdx;
  } else if ((midVal <= startVal && startVal <= endVal) || (endVal <= startVal && startVal <= midVal)) {
    return startIdx;
  } else {
    return endIdx;
  }
}
  

export function getHeapSortAnimations(array){
  const animations = [];
  const auxiliaryArray = array.slice();

  if (auxiliaryArray.length <= 1) return animations;

  doHeapSort(auxiliaryArray, animations);
  
  
  return animations;
}

function doHeapSort(array, animations){
  var len = array.length;

  for (let i = Math.floor(len/2) - 1; i  >= 0; i--){
    heapify(array, len, i, animations);
  }
  for (var i = len - 1; i > 0; i--){
    animations.push([0, i]);
    animations.push([0, i]);

    [array[0], array[i]] = [array[i], array[0]];

    animations.push([0, array[0]]);
    animations.push([i, array[i]]);
    heapify(array, i, 0, animations);
  }
}

function heapify(array, len, i, animations){
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < len && array[l] > array[largest]){
    largest = l;
  }

  if (r < len && array[r] > array[largest]){
    largest = r;
  }
  if (largest != i){
    animations.push([i, largest]);
    animations.push([i, largest]);
    [array[i], array[largest]] = [array[largest], array[i]]; 
    animations.push([i, array[i]]);
    animations.push([largest, array[largest]]);
    heapify(array,len,largest,animations); 
  }
}