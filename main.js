var listItems = [ 
"Buy Gifts", 
"Watch Love Actually", 
"Finish Harry Potter"];

var list = document.getElementById("list"); // target the list id within the html

for (var i = 0; i < listItems.length; i++) { // 'for' is a term for a loop. we pass in conditions. you use loops with arrays. 
	var li = document.createElement("li"); // this is a reference
	li.appendChild(document.createTextNode(listItems[i])); // accesses whatever index is witin our loop
	list.appendChild(li);
}

function addItem() {
	if (document.getElementById("todo-input").value == "") {
		window.alert("Silly Goose! You didn't add an item to do!")
	} else {
	// function event.preventDefault(); //why won't this prevent my bullet from appearing?
		var item = document.getElementById("todo-input").value; //var is a semantic container for something, can hold a function, a number, a string, an array. You access it by typing it, no ""
		listItems.push(item);  //push is something you can only to an array. listItems is the array (list) at the top. Pushing (item) to that array adds the next item to the list
		var li = document.createElement("li"); //this creates an empty list
		li.appendChild(document.createTextNode(item)); //we cant just pass in our string, we need to add in createTextNode
		list.appendChild(li); // parent element.appendChild (child)
		// debugger;
		document.getElementById("todo-input").value = ""; //this clears the input field so the user can keep adding
	}
}




// var babez = ["Morgane", "Emma", "Erin"];
// //if you wanted to pull in just emma, you'd say babez[1] = "Emma"

// for (var i = 0; i < babez.length; i++) {
// 	// debugger; 
// 	// the debugger; is a tool to pause scripts from running to target whether or not the function is working and you're running through your loop correctly
// 	console.log(babez[i]+" is awesome")
// }
// // beginnig of loop; end loop when i is less than babez length, this essentially tells the comp the loop is over
// // start with var i = 0 so we begin at the beginning of the loop, typically the element with the index of 0
// // i++ tells the computer what increment to go up by. i++ means go up by 1