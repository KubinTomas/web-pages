function onEvaluateClick() {
    const text = getTextareaValue();
    const wordCount = getWordCount(text);
    const charCount = getCharCount(text);

    displayResult(wordCount, charCount);
}

function displayResult(wordCount, charCount) {
    const wordCountElement = document.getElementById('wordCount');
    const charCountElement = document.getElementById('charCount');

    wordCountElement.innerHTML = wordCount;
    charCountElement.innerHTML = charCount;
}

function getWordCount(text) {
    const textSplit = text.split(' ');

    const textSplitWithoutEmptyStrings = textSplit.filter(word => word !== '');

    return textSplitWithoutEmptyStrings.length;
}

function getCharCount(text) {
    return text.length;
}

function getTextareaValue() {
    const textareaElement = document.getElementById('textarea');

    return textareaElement.value;
}