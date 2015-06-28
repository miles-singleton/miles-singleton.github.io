function askQuestions() {

	var age = prompt('How old are you?');
	age = parseInt (age);

	if (age >= 18) {
		alert('Come on in!');
	} else if (age >=13) {
		alert('Come back in a few years.');
	} else {
		alert('Go away, child!');
	}

	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	$('h2').text('Hello' + fullName);

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		alert('Greetings, General');

	}else if (firstName == 'general' && lastName == 'assembly') {
		alert('You are not welcome here, General!');
	}

}


// When the page loads
$(function() {

	$('img').on('click',askQuestions);

	$('h3').next().hide();

    // When the user clicks an h3 
    $('h3').on('click', function() {

        // Hide the next elemement
        $(this).next().slideToggle(1000);

    });

});