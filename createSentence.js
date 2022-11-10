function createSentence(words, punktuation) {
  const sentence = words.join(' ');
  return sentence + punctuation;
}
const words = ['Hi,', 'my', 'name', 'is', 'Brandon'];
const punctuation = '!';
const sentence = createSentence(words, punctuation);
console.log(sentence);
