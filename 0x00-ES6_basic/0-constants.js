// Function taskFirst
export function taskFirst() {
  // Define a constant variable 'task'
  const task = 'I prefer const when I can.';
  // Return the value of the 'task' constant
  return task;
}

// Function getLast
export function getLast() {
  // Return the string ' is okay'
  return ' is okay';
}

// Function taskNext
export function taskNext() {
  // Define a variable 'combination' and initialize it with the string 'But sometimes let'
  let combination = 'But sometimes let';
  // Append the result of calling the 'getLast' function to the 'combination' variable
  combination += getLast();
  // Return the concatenated value of 'combination'
  return combination;
}
