// List of data
const randomMessages = [
  'There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.',
  "Never take criticism from someone you wouldn't take advice from.",
  'Do the best you can until you know better.',
  'Listen more than you speak.',
];

// Function that accept a parameter as an array

const generateRandomMessage = (arr) => {
  // Using Math methods to generate random number based on the size of the array
  const randomIndex = Math.floor(Math.random() * arr.length);
  // Function returns the message in the array
  return arr[randomIndex];
};

// Calling function

console.log(generateRandomMessage(randomMessages));
