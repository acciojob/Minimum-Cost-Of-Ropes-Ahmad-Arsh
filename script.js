// Get the input element and the result element
const input = document.getElementById('input');
const resultDiv = document.getElementById('result');

// Define the function to find the minimum cost of ropes
function findMinimumCostOfRopes(arr) {
  // Initialize a priority queue with the lengths of the ropes
  const pq = new PriorityQueue();
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(arr[i]);
  }
  
  // Iterate until there is only one rope left in the priority queue
  let totalCost = 0;
  while (pq.size() > 1) {
    // Dequeue the two shortest ropes and add their lengths
    const rope1 = pq.dequeue();
    const rope2 = pq.dequeue();
    const cost = rope1 + rope2;
    
    // Enqueue the new rope and add its cost to the total cost
    pq.enqueue(cost);
    totalCost += cost;
  }
  
  // Return the total cost
  return totalCost;
}

// Define the PriorityQueue class
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  
  enqueue(item) {
    let added = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (item < this.queue[i]) {
        this.queue.splice(i, 0, item);
        added = true;
        break;
      }
    }
    if (!added) {
      this.queue.push(item);
    }
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }
  
  isEmpty() {
    return this.queue.length === 0;
  }
  
  size() {
    return this.queue.length;
  }
}

// Define the function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  
  // Parse the input string as an array of integers
  const inputStr = input.value.trim();
  const arr = inputStr.split(',').map(str => parseInt(str));
  
  // Find the minimum cost of the ropes and display it in the result element
  const minimumCost = findMinimumCostOfRopes(arr);
  resultDiv.textContent = `Minimum cost of ropes: ${minimumCost}`;
}

// Add an event listener to the form submit button
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
