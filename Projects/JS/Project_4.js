document.getElementById('name').style.fontSize = '50px';

/* The square brackets [0] is because 
the getElement(s)ByClassName creates 
an array and the zero selects the first 
item in the array */
document.getElementsByClassName('dob')[0].style.border = '2px solid blue';

/* "." indicates class like CSS
"#" indicates id like CSS */
// .querySelector selects only the first element
/* .querySelectorAll selects all the elements e.g 'div'
 and returns an array so you'll need to specify an 
 index position number like [0] if you're targeting a
 specific element eg. .querySelector('div')[1] which
 selects the second div in the document */
document.querySelector('#upper').style.backgroundColor = 'yellow';

/* .querySelectorAll() creates an array and you have to
 iterate over the array to edit items */
document.querySelectorAll('.cont').forEach(item => {
	item.style.backgroundColor = 'green';
	item.style.paddingLeft = '30px';
	item.style.paddingRight = '30px';
	item.style.fontSize = '30px';
	item.style.color = 'aqua';
});
