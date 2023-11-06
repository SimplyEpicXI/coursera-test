// **** This page is only to provide browser content, indicating the solution that appears in the console *****

document.write("This is JavaScript text." + "<br/>" + "<br/>" + "The text below can also be seen in the console." + "<br/>" + "To validate the solution, please review files: " + "<br/>" + "i. script.js" + "<br/>" + "ii. SpeakHello.js" + "<br/>" + "iii. SpeakGoodBye.js" + "<br/>" + "<br/>");
for (i = 0; i < names.length; i++) {	
	var firstLetter = names[i].charAt(0);
	firstLetter = firstLetter.toLowerCase();
	if (firstLetter == "j") {
 		document.write("Good Bye " + names[i] + "<br/>");
	} else {
		document.write("Hello " + names[i] + "<br/>");
	}
}


document.write("<br/>" + "<br/>" + "<br/>" + "Note: the solution used to generate the browser-visible JavaScript text varies slightly from the solution for the console text." + "<br/>" + "The console solution follows the instructions as per the assignment.")