products = document.getElementsByClassName('product-container')

const windowCheck = () => {
    window.innerWidth <= 531 ? carousel() : reset() 
}

const carousel = () => {
    products[0].style.display = 'flex'
    for (let i = 1; i < products.length; i++ ) {
        products[i].style.display = 'none';
    }
    
}

const reset = () => {
    for (let i = 1; i < products.length; i++ ) {
        products[i].style.display = 'flex';
    }
}

const previous = () => {
    for (let i = products.length - 1; i > -1; i--) {
        if (products[i].style.display === 'flex' && i != 0) {
            products[i].style.display = 'none';
            products[i-1].style.display = 'flex'
            break
        }
    }
}

const next = () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].style.display === 'flex' && i != products.length -1) {
            products[i].style.display = 'none';
            products[i+1].style.display = 'flex'
            break
        }
    }
}

window.innerWidth <= 531 ? carousel() : reset() 