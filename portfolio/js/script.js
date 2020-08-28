/*JavaScript for the website*/

//form validation 	
function check(){
	var fname = document.forms["message"]["firstName"].value;
	var midname=document.forms["message"]["middleName"].value;
	var lname = document.forms["message"]["lastName"].value;
	var mail=document.forms["message"]["email"].value;
	var phone=document.forms["message"]["phone"].value;
	var gender = document.forms["message"]["gender"].value;
	var message = document.forms["message"]["message"].value;
	//condition check section
	if (fname == "" || lname == ""|| mail=="" || phone == ""|| gender==""|| message == ""){
		alert("Value missing! Please fill the form.");
	}else {
		alert("Thank you for your feedback.");
	}
}


//for like and dislike button
var like=1;
function likes(){	
	document.getElementById('up').innerHTML=like;
	like=1+like;
	alert("Thank you for liking!");	
}

var dislike=1;
function dislikes(){
	document.getElementById('down').innerHTML=dislike;
	dislike=1+dislike;
	alert("Sorry! for the post.");	
}

var li=1;
function likes_two(){	
	document.getElementById('up2').innerHTML=li;
	li=1+li;
	alert("Thank you for liking!");	
}

var di=1;
function dislikes_two(){
	document.getElementById('down2').innerHTML=di;
	di=1+di;
	alert("Sorry! for the post.");	
}
