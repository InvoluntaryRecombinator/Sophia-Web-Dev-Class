/* Newsletter Feature */
function subscribe() {
    alert('Thank you for subscribing.');
}

/* shopping cart features in session storage */
function addToCart(itemName) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(itemName);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert(itemName + ' added to the cart.');
}

function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    let list = document.getElementById('cartList');
    
    if (!list) return; 

    if (cart.length > 0) {
        list.innerHTML = ""; // clear it for new items
    } else {
        list.innerHTML = "<li>Your cart is empty.</li>";
    }

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]; // grab the current item
        
        let li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    }
    
    document.getElementById('cartModal').style.display = 'block';
}


function clearCart() {
    sessionStorage.removeItem('cart');
    alert('Cart cleared.');
    viewCart(); 
}

function processOrder() {
    sessionStorage.removeItem('cart');
    alert('Thank you for your order.');
    viewCart(); 
}

/* Contact Form local storage*/
function saveContact() {
    let info = {
        name: document.getElementById('custName').value,
        email: document.getElementById('custEmail').value,
        message: document.getElementById('custMessage').value
    };
    
    
    localStorage.setItem('customOrder', JSON.stringify(info));
    alert('Thank you for your message. Your details have been saved.');
}