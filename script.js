function minimumCostOfRopes(lengths) {
  let cost = 0;
  // Convert the comma-separated string of lengths to an array of numbers
  const ropes = lengths.split(',').map(Number);
  // Create a min-heap to store the lengths of ropes
  const heap = new MinHeap();
  // Insert all ropes into the min-heap
  ropes.forEach((rope) => heap.insert(rope));
  // Keep merging the two smallest ropes until there is only one rope left in the min-heap
  while (heap.size() > 1) {
    const rope1 = heap.extractMin();
    const rope2 = heap.extractMin();
    const sum = rope1 + rope2;
    cost += sum;
    heap.insert(sum);
  }
  return cost;
}

// Get the form element and the result div element
const form = document.getElementById('rope-lengths-form');
const resultDiv = document.getElementById('result');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the input value and compute the minimum cost of ropes
  const input = document.getElementById('rope-lengths-input');
  const lengths = input.value.trim();
  const cost = minimumCostOfRopes(lengths);
  // Display the result in the result div element
  resultDiv.textContent = `Minimum cost of ropes: ${cost}`;
});
