import React from 'react';
import {getBubbleSortAnimations, getMergeSortAnimations, getQuickSortAnimations, getHeapSortAnimations} from '../SortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 120;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#FBEAEB';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  
  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 === 0 || i % 4 ===1;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];

    // Add bounds check for the indices
      if (barOneIdx >= arrayBars.length || barTwoIdx >= arrayBars.length) {
        console.error(`Invalid indices: barOneIdx=${barOneIdx}, barTwoIdx=${barTwoIdx}`);
        continue; // Skip this iteration if indices are out of bounds
      }

      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);

    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];

      if (barOneIdx >= arrayBars.length) {
        console.error(`Invalid index: barOneIdx=${barOneIdx}`);
        return;
      }

      const barOneStyle = arrayBars[barOneIdx].style;
      barOneStyle.height = `${newHeight}px`;
    }, i * ANIMATION_SPEED_MS);
  }
}

    /*for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }*/
  }

    
        
    
  
  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
  
    
  
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 < 2; // Color change occurs every 4 steps

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        console.log(animations[i])
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
  
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barIdx, newHeight] = animations[i];
        setTimeout(() => {
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  
  
  
   quickSort() {
      const animations = getQuickSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const animation = animations[i];
        
        if (animation.length === 2) {
          const [action, barOneIdx] = animation;
          const barOneStyle = arrayBars[barOneIdx]?.style;
    
          if (action === "selectPivot") {
            setTimeout(() => {
              if (barOneStyle) barOneStyle.backgroundColor = "red";
            }, i * ANIMATION_SPEED_MS);
          } else if (action === "compareEnd") {
            setTimeout(() => {
              if (barOneStyle) barOneStyle.backgroundColor = PRIMARY_COLOR;
            }, i * ANIMATION_SPEED_MS);
          }
        } else if (animation.length === 3) {
          const [action, barOneIdx, barTwoIdxOrHeight] = animation;
          const barOneStyle = arrayBars[barOneIdx]?.style;
          const barTwoStyle = arrayBars[barTwoIdxOrHeight]?.style;
    
          if (action === "compare") {
            setTimeout(() => {
              if (barOneStyle) barOneStyle.backgroundColor = "yellow";
              if (barTwoStyle) barTwoStyle.backgroundColor = "yellow";
            }, i * ANIMATION_SPEED_MS);
          } else if (action === "swap") {
            setTimeout(() => {
              if (barOneStyle && barTwoStyle) {
                const barOneHeight = barOneStyle.height;
                const barTwoHeight = barTwoStyle.height;
                barOneStyle.height = barTwoHeight;
                barTwoStyle.height = barOneHeight;
              }
            }, i * ANIMATION_SPEED_MS);
          } else if (action === "compareEnd") {
            setTimeout(() => {
              if (barOneStyle) barOneStyle.backgroundColor = PRIMARY_COLOR;
              if (barTwoStyle) barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }
    }
    
  
  
  
  

  
 
  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <header className="header">Sorting Algorithm Visualizer</header>
        <div className="buttons">
        <button className = "medium-btn" onClick={() => this.resetArray()}>Generate New Array</button>
        <button className = "medium-btn" onClick={() => this.mergeSort()}>Merge Sort</button>
        <button className = "medium-btn" onClick={() => this.quickSort()}>Quick Sort</button>
        <button className = "medium-btn" onClick={() => this.heapSort()}>Heap Sort</button>
        <button className = "medium-btn" onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}