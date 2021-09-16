# React application for an E-Commerce Website.
E-Commerce website with Cart Functionality.

## Working
The home and the product pages are standard. 

A resusable React component is present to display all the products in the homepage. Filters are present between the various available categories.

You can add products from each product's individual page. You can choose the quantity of the product you wish to purchase and also Add to Cart with a button for the same.

## Cart Funtionality
On clicking the Add to Cart button, your product will be displayed in a cart with the updated price and quantity of all items.

There is an option to increase and decrease the quantity of an item in cart. The cart will update final price accordingly dynamically.
You can also remove an item from Cart by reducing the quantity to 0.

The Cart is also visible in the Homepage. Items in cart will remain as they are as you traverse across the website. The React Hooks method (useContext) was used to achieve this functionality.

Validation is present to halt the addition of items to cart which are already present in cart.

## Built Using
1. React Hooks, React-Router-Dom and React-Loader-Spinner
2. [Fake Store API](https://fakestoreapi.com)
3. [Single Page Apps for Github Pages](https://github.com/rafgraph/spa-github-pages)