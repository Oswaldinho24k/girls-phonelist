// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5mVGCAecREXqjcWrGb0Ap524eNQ-O9yk",
    authDomain: "ma-girls.firebaseapp.com",
    databaseURL: "https://ma-girls.firebaseio.com",
    storageBucket: "ma-girls.appspot.com",
    messagingSenderId: "502420159715"
  };
  firebase.initializeApp(config);

var chicas = firebase.database().ref('girls/');



function saveNumber() {
	var name = $('#name').val();
	var number = $('#number').val();
	chicas.push({
		girl: name,
	    contact:number
	    
	});
	var name = $('#name').val('');
	var number = $('#number').val('');
}

chicas.on('child_added', function(data) {
	var numero = data.val().contact;
	var nombre = data.val().girl;

	$('#lista').prepend('<p> ❤️ ' + nombre + ': ' + numero + '</p>' );
});





