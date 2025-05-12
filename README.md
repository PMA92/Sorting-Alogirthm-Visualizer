### 'Sorting Algorithm Visualizer'
A dynamic, interactive React app that visually demonstrates how popular sorting algorithms work using animated vertical bars. Each bar's height corresponds to a value in the array, and the sorting process transforms a randomized bar graph into a neatly sorted visualization from shortest to tallest (or vice versa).

## 'Features'
🔁 Real-Time Visualization of the following algorithms:

Merge Sort

Quick Sort

Heap Sort

Bubble Sort

## 'Visual Design:'

Array values are represented as vertical bars with heights proportional to the value.

Final sorted array appears as a graph with bars increasing in height from left to right.

## Educational Interface:

Great for learning the inner workings of sorting algorithms.

Observe how different algorithms approach the sorting problem.

## Adjustable Settings (optional enhancements):

Change array size.

Control animation speed.

Randomize new data sets.

## Tech Stack
Frontend: React, JavaScript, HTML5, CSS3

Visualization: CSS animations and dynamic rendering through React state management

## Getting Started
Prerequisites
Node.js installed

# Installation
bash
Copy
Edit
git clone https://github.com/yourusername/sorting-algorithm-visualizer.git
cd sorting-algorithm-visualizer
npm install
npm start
Open http://localhost:3000 in your browser to run the app.

## How It Works
An array of random values is generated.

Each value is represented as a vertical bar.

Selecting an algorithm triggers a step-by-step sorting animation.

Bars animate in real-time to show comparisons, swaps, and placements.

The result is a bar graph sorted in increasing order of height from left to right.

## Available Scripts
npm start – Runs the app in development mode.

npm run build – Builds the app for production.

