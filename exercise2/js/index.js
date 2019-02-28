$(document).on("pagecreate","#pageone", onPageCreated);

//some example data
fruit = [
  { name: 'Banana', colour: 'Yellow',	price: '£0.89',  country: 'Columbia'},
  { name: 'Orange', colour: 'Orange', 	price: '£0.07',  country: 'America'},
  { name: 'Lime',	colour: 'Green',	price: '£5.00',  country: 'Indonesia'},
  { name: 'Dragon Fruit',	colour: 'Pink',	    price: '£3.01',  country: 'Singapore'}
];


function onPageCreated() {
	var ractive = new Ractive({
		  // The `el` option can be a node, an ID, or a CSS selector.
		  el: '#content',
	
		  // We could pass in a string, but for the sake of convenience
		  // we're passing the ID of the <script> tag above.
	  template: '#template',
	
		  // Here, we're passing in some initial data
		  data: { fruitlist: fruit }
		});
}