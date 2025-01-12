/*sidenavbar-display property*/

var sidenav = document.querySelector(".side-nav")

function showNavbar()
{
    sidenav.style.left="0%"
    
    
}
function closenavbar()
{
    sidenav.style.left="-60%"
}


// Function to add a product to the cart
const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex((item) => item.name === product.name);
  
  if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += 1;
  } else {
      product.quantity = 1;
      cart.push(product);
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

};

// Add event listeners to cart buttons
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
          const product = {
              name: document.querySelectorAll(".brand h5")[index].textContent,
              image: document.querySelectorAll(".products img")[index].src,
              price: document.querySelectorAll(".brand h4")[index].textContent,
              quantity: 1,
          };
          addToCart(product);
      });
  });

  // Update the cart count on page load
  updateCartCount();
});

// Function to update the cart count
const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartCountElements = document.querySelectorAll(".cart-count");

  cartCountElements.forEach(cartCountElement => {
      if (totalQuantity > 0) {
          cartCountElement.style.display = "inline-block";
          cartCountElement.textContent = totalQuantity;
      } else {
          cartCountElement.style.display = "none";
      }
  });
};


// Select the Login button
const loginButton = document.querySelector("button[type='submit']");

// Add a click event listener to the button
loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
   
});
function handleAddToCart(button) {
  // Create "Product Added" message
  const addedMessage = document.createElement("div");
  addedMessage.className = "product-added";
  addedMessage.innerHTML = '<i class="fa-solid fa-check"></i> Product Added';

  // Get the parent container
  const productDiv = button.closest(".products");

  // Replace the button with the added message
  productDiv.replaceChild(addedMessage, button);

  // Revert to the original "Add to Cart" button after 2 seconds
  setTimeout(() => {
      productDiv.replaceChild(button, addedMessage);
  }, 2000); // 2 seconds delay
}





  function showMessage() {
      const message = document.getElementById('error-message');
      message.style.display = 'block';
      message.classList.add('message');

      // Hide the message after 2 seconds
      setTimeout(() => {
        message.style.display = 'none';
      }, 2000);
    }

    function validateEmail() {
      const emailField = document.getElementById('email');
      const message = document.getElementById('message');
      const signButton = document.querySelector('.signbutton');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailRegex.test(emailField.value)) {
        message.style.display = 'block';
        message.textContent = 'Sign-up Success!';
        message.style.color = 'green';
        message.className = 'message success';
  
        // Hide the input and button after 2 seconds
        setTimeout(() => {
          emailField.style.display = 'none';
          signButton.style.display = 'none';
          message.style.display = 'none';
        }, 2000);
      } else {
        message.style.display = 'block';
        message.textContent = 'Sign-up Failed!';
        message.style.color = 'red';
        message.className = 'message failure';
  
        // Hide the message after 2 seconds
        setTimeout(() => {
          message.style.display = 'none';
        }, 2000);
      }
    }

