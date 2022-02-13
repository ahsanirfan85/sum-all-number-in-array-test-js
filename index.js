function sumItems(array) {
  let total = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      total += sumItems(element);
    } else {
      total += element;
    }
  }
  return total;
}

module.exports = sumItems;