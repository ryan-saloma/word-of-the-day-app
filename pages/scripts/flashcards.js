// Get the button element
const flashcardContainer = document.querySelector('.new-flashcard-form');
let hiddenFlashcard = document.querySelector('.flashcard--hidden');
const addButton = document.querySelector('.btn-addRow');

// Add a click event listener to the button
// need to 1) make invisible card visible, 
// 2) generate new invisible card, 
// 3) set new-flashcard-form to old + 25%
addButton.addEventListener('click', function (event) {
    const copiedFlashcard = hiddenFlashcard.cloneNode(true);
    let currentHeight = flashcardContainer.clientHeight;
    console.log(currentHeight);
    flashcardContainer.style.height = `${currentHeight + 175}px`;
    hiddenFlashcard.classList.add('flashcard--visible');
    hiddenFlashcard.classList.remove('flashcard--hidden');
    hiddenFlashcard = copiedFlashcard;
    flashcardContainer.appendChild(hiddenFlashcard);
});