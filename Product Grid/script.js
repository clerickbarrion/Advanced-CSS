// puts all section.product-container into an array
products = document.getElementsByClassName('product-container')

// if screen is <= 531px put items into carousel mode
const windowCheck = () => {
    window.innerWidth <= 531 ? carousel() : reset();
}

// goes through each .product-container in products array & sets display
// to none except for the 1st one 
const carousel = () => {
    products[0].style.display = 'flex';
    for (let i = 1; i < products.length; i++ ) {
        products[i].style.display = 'none';
    };
};

// sets all items in products array to display flex when screen is 532px+
const reset = () => {
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = 'flex';
    };
};

// goes through products array until it finds the .product-container
// that is set to display flex. it sets it to none and sets the next
// .product-container in the array from none to flex.
const next = () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].style.display === 'flex' && i != products.length -1) {
            products[i].style.display = 'none';
            products[i+1].style.display = 'flex';
            break;
        };
    };
};

// same as next() but backwards
const previous = () => {
    for (let i = products.length - 1; i > -1; i--) {
        if (products[i].style.display === 'flex' && i != 0) {
            products[i].style.display = 'none';
            products[i-1].style.display = 'flex';
            break;
        };
    };
};

// runs when page is loaded to fix a glitch where items don't appear
windowCheck()