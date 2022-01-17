let cart = JSON.parse(localStorage.getItem("cart"))
? JSON.parse(localStorage.getItem("cart"))
: [];

function readBooks(items) {
    document.querySelector("#products").innerHTML = "";
    items.forEach((product, position) => {
      document.querySelector("#products").innerHTML += `
        
        <div class="card">
          <Image src="${product.image}" class="card-Image-top" alt="${product.title}">
          <div class="card-body">
            <h4 class="card-title">${product.title}</h4>
            <p><strong> ${product.title} by ${product.author} </strong>- </p>
            <p class="card-text">$<strong> ${parseInt(product.price)}</strong></p>
            <div d-flex>
            <input type="number" value=${product.quantity} class="cart" min=1 id="addToCart${position}">
            </div>

            <div>
            <button type="button" class="btn btn-primary" onclick="updateCart(${position})" >
          Update
        </button>
        <button type="button" class="btn btn-danger" onclick="removeCart(${position})" >
          Remove
        </button>
      </div>

    </div>
            `
    })

    document.querySelector("#cost").innerHTML = `Total: R${ totalCost() }`
}

readBooks(cart)

// UPDATE BOOK
function updateCart(position) {
  let quantity = document.querySelector(`#addToCart${position}`).value;
  try {
    if(quantity === cart[position].quantity) {throw new Error("You did not make any changes")}

    cart[position] = ({...cart[position], quantity}) 

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart[position].quantity)
    readBooks(cart)

  } catch (error) {
    alert(error)
  }
  
}

// REMOVE BOOK
function removeCart(position) {
  let confirmation = confirm(
    `Are you sure you want to remove ${cart[position].title}?`
  );

  if (confirmation) {
    cart.splice(position, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    readBooks(cart);
  }
  totalCost();
}

// Total Cost
function totalCost() {
  let totalCost = 0
    items = JSON.parse(localStorage.getItem("cart"))
    for(let i = 0; i < items.length; i++){
      
      totalCost += items[i].price*items[i].quantity;

    }
    return parseInt(totalCost)
}

// Checkout
function checkout(){
  let confirmation = confirm(
    `Your totalcost is ${totalCost()}`
  );
  if(confirmation){
    cart.length = 0
    localStorage.removeItem('cart')
    readBooks(cart)
  }

}