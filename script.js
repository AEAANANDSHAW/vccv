var enterYourWord = document.getElementById('enterWord'); 		// Input
var submitYourWord = document.getElementById('wordSubmit'); 	// Button
var success = document.getElementById('dance'); 							// Success Message
var vowelsOutput = document.getElementById('vowels'); 				// Where the vowel count gets output
var yOutput = document.getElementById('Y'); 									// Where the "y" count gets output
var consonantOutput = document.getElementById('consonants'); 	// Where the consonant count gets output
var resetForm = document.getElementById('resetForm'); 	

var $form = $('.wrap');// Reset button to hide success div again.

// Function to take current value of input and count vowels and consonants
$form.on('submit', function(e) {
  	e.preventDefault();
  
    var consonantCount = 0; // Setting Each count to 0
    var vowelCount = 0; 		// Setting Each count to 0
  	var yCount = 0;					// Setting Each count to 0
  	var currentWord = enterYourWord.value; // Grabs the user input

    // Iterate over the currentWord letters
    for (var i = 0; i < currentWord.length; i++) {
        var currentLetter = (currentWord[i]);

        // Test each letter with regEx to see if it's a vowel
        if (currentLetter.match("^[aeiouAEIOU]+$")) {
            // Add to the vowelCount array for each letter that's a vowel
            vowelCount++
        } else if (currentLetter.match("^[qwrtpsdfghjklzxcvbnmQWRTPSDFGHJKLZXCVBNM]+$")) {
            // Add to consonantCount array for each letter that's a consonant
            consonantCount++
        }
      	else if ( currentLetter.match("^[yY]+$")) {
          	// Add "y" count array for each letter that's a "y".
         		yCount++
        }
      	else {}

    }
  
    // Alert user if they are submitting an empty string value
    if (currentWord == "" ) {
        alert('Don\'t forget to add a word!');
    }
  	else if (currentWord.match(' ')) {
      alert('YOU MUST NOT HAVE SPACES!');
    }
  	else {
        // Show the success message and output the vowelCount, consonantCount, and yCount arrays
        document.getElementById("success").className = "success"; // Removes 'Hidden' classes, but keeps 'success' class
      	document.getElementById("main").className = "hidden"; 		// Hides main 
        consonantOutput.innerText = 'Vowels: ' + vowelCount;
        vowelsOutput.innerText = 'Consonants: ' + consonantCount;
      	yOutput.innerText = 'Y\'s: ' + yCount;
      	userWord.innerText = 'Your Word:  \'' + currentWord + '\'';
      	
    }
    // Hide success message on button click
resetForm.onclick = function() {
    document.getElementById("success").className = "success hidden";
  	document.getElementById("main").className = "";
}
});