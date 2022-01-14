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
            <p class="card-text">$<strong> ${product.price}</strong></p>
            <div d-flex>
            <input type="number" value=1 class="cart" min=1 id="addToCart${position}">
            <button type="button" class="btn btn-secondary addToCart"  onclick="addToCart( ${position} )">
              Add to Cart
            </button>
            </div>
            <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editBook${position}" >
              Edit
            </button>
            <button type="button" class="btn btn-danger" onclick="deleteBook(${position})" >
              Delete
            </button>
            </div>`
    })
}