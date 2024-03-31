// Get the button element
const flashcardContainer = document.querySelector('.new-flashcard-form');
let hiddenFlashcard = document.querySelector('.flashcard--hidden');
const addButton = document.querySelector('.btn-addRow');
var flashcardCounter = 2;

// Add a click event listener to the button
// need to 1) make invisible card visible, 
// 2) generate new invisible card, 
// 3) set height of new-flashcard-form to old + 125px
addButton.addEventListener('click', function (event) {
    const copiedFlashcard = hiddenFlashcard.cloneNode(true);
    let currentHeight = flashcardContainer.clientHeight;
    console.log(currentHeight);
    flashcardContainer.style.height = `${currentHeight + 175}px`;
    hiddenFlashcard.classList.add('flashcard--visible');
    hiddenFlashcard.classList.remove('flashcard--hidden');
    hiddenFlashcard = copiedFlashcard;
    flashcardContainer.appendChild(hiddenFlashcard);
    flashcardCounter += 1;
    const termElement = copiedFlashcard.querySelector('textarea.term');
    termElement.id = `term${flashcardCounter}`;
    termElement.name = `term${flashcardCounter}`;
});


const form = document.getElementById('flashcards');

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Select all textarea elements within the form
    const textareas = form.querySelectorAll('textarea');

    // Initialize an empty object to store the textarea values
    const formData = {};

    // Iterate over each textarea element
    textareas.forEach(function (textarea) {
        // Extract the textarea's id and value
        const id = textarea.id;
        const value = textarea.value;

        // Add the id and value to the formData object
        formData[id] = value;
        textarea.value = '';
    });

    // Convert the formData object to a JSON string
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);

    // Post the JSON data to a URL using fetch() or XMLHttpRequest
    // fetch('your-post-url', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: jsonData
    // })
    // .then(response => {
    //     // Handle the response as needed
    //     console.log('Response:', response);
    // })
    // .catch(error => {
    //     // Handle any errors
    //     console.error('Error:', error);
    // });
});
