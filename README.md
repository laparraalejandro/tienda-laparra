# React JS developer Course - Coderhouse

## About this project

The following project is an E-commerce platform composed by all the modules developed during the course <br>


The resulting website is a template for a real sports store, with build in functionalities that allows for a basic shopping experience. Because of modular design of the application and the emphasis given on the principles of separate responsibilities for each one of the functionalities, any of the existing features can be customize to the client’s requirements without compromising the rest. These characteristics allow for a more scalable application, granting the possibility to build add-ons over the existing logic to expand in new functionalities. It´s user friendly design, achieved with the react-bootstrap library, makes for an easier reading and editing than pure HTML, thus making the visual design of the site something very easy and quick to maintain. 

<figure style="text-align: center">
   <img 
    alt="captures where some of the functionalities of the site are shown"
    with="350" 
    height="350" 
    src="https://firebasestorage.googleapis.com/v0/b/tienda-laparra-react-1.appspot.com/o/1.png?alt=media&token=b1de3006-f8e4-4c9e-8aea-1c48db43f21f" 
  />
  <figcaption>animated GIF where some of the functionalities of the site are shown</figcaption>
</figure>

<hr>

## Utilized Tools

The tools used for creating this Project are the following:

- React JS (main js library)
- Firebase (storage-backend)
- React Bootstrap (main CSS Framework)
- React Router Dom (browsing).

<hr>

## Project installation and setup

1. Clone the existing repository using the gitbash command:  _`git clone https://github.com/laparraalejandro/tienda-laparra.git`_
2.  Install all the Project dependencies using the commnad:
   _`npm install` (you may also use `npm i`)_
3. Launch the Project using the command: _`npm start`_

<hr>

## Project Features

### Navbar

- Allows for navigation between different product categories, filtering the corresponding items accordingly
- Displays the Cart Widget with the number of items already in the cart

### Main section

- Display of all the products on the store, or only those already filtered by category, accoding to the case. 
- On clicking any item on display you´ll be automatically redirected to the item´s details.

### Detail Section

- This is the section where the extended description of the product is shown
- On this section you may select how many items you wish to buy. The allowed purchase is limited by the existing stock of the item, which is automatically updated each time a successful buy is performed.
-You may also edit you order from this section, whenever you wished to change the number of items to buy, selecting the “actualizar order” option.
-Once your order has been confirmed, you´ll be redirected to the shopping cart

### Shopping Cart

- A simple and intuitive display of all the items added to the shopping cart, along with the respective number of each of the items, their price, and total amount of the order
- This section includes functionalities to remove any and all items from the cart, resume shopping, and finished the purchase 

### Buy Form

- On this final feature you must provide your personal data to validate and register your purchase. 
- Once your data has been submitted you´ll be notified of the operation’s state.
  - In case your operation fails, you´ll be notified and your shopping cart will be updated if necessary with the correct number of elements on stock
  - If the operation is successful, you´ll be notified and granted your Order´s Id 
