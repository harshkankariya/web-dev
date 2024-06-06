function removeDuplicates(stringsArray) {
    // Create a Set from the array, which automatically removes duplicates
    const uniqueStrings = new Set(stringsArray);
  
    // Convert the Set back to an array
    return [...uniqueStrings];
  }
  
  // Example usage:
  const arrayOfStrings = ["apple", "banana", "apple", "orange", "banana", "grape"];
  const uniqueArray = removeDuplicates(arrayOfStrings);
  console.log(uniqueArray);