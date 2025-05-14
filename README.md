The app is made using React, and consists of three components:
- App.jsx
- ProductList.jsx
- ProductItem.jsx

In App.jsx there is an array of data for the products. Each item in the array has a 
category value as well. The data from the array is passed to the ProductList.jsx
component. 

The ProductList.jsx uses a map() to send each item to the ProductItem.jsx to be rendered. 
Before the map() function runs, a pair of funtions run that compares the item's category value 
with the value selected from a drop down list, and allows only items with matching values
to be rendered. The default category for the list is "All", which allows all items to 
be rendered. 

The ProductItem.jsx passes the data to each items properites (name, img, price, description)
to be rendered on seperate cards. 

No bootsrtap was used for styling per the instructions. The Index, App, ProductList,
and ProductItem each have their own CSS page. Products are displayed on cards 
with styling for a clean look. Cards transition when hover to slightly pop out. 
I used grid to layout most of the page in 3 columns for the cards. Used media queries
to change grid to 2 columns and then 1 column the smaller the screen gets. 
