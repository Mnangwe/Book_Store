let books = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
    { 
        "image": "./Assets/images/AbbeyN.jpg",
        "title": "Northanger Abbey",
        "author": "Austen, Jane",
        "year_written": 1814,
        "edition": "Penguin",
        "price": 18.2
     }, 
     {
        "image":"./Assets/images/WarPeace.jpeg",
        "title": "War and Peace",
        "author": "Tolstoy, Leo",
        "year_written": 1865,
        "edition": "Penguin",
        "price": 12.7
     }, 
     {
        "image":"./Assets/images/AnnaK.jpeg",
        "title": "Anna Karenina",
        "author": "Tolstoy, Leo",
        "year_written": 1875,
        "edition": "Penguin",
        "price": 13.5
     }, 
     {
        "image":"./Assets/images/mrs-dalloway-162.jpg",
        "title": "Mrs. Dalloway",
        "author": "Woolf, Virginia",
        "year_written": 1925,
        "edition": "Harcourt Brace",
        "price": 25
     }, 
     {
        "image":"./Assets/images/hours.jpg",
        "title": "The Hours",
        "author": "Cunnningham, Michael",
        "year_written": 1999,
        "edition": "Harcourt Brace",
        "price": 12.35
     }, 
     {
        "image":"./Assets/images/FinnH.jpeg",
        "title": "Huckleberry Finn",
        "author": "Twain, Mark",
        "year_written": 1865,
        "edition": "Penguin",
        "price": 5.76
     }, 
     {
        "image":"./Assets/images/house.jpg",
        "title": "Bleak House",
        "author": "Dickens, Charles",
        "year_written": 1870,
        "edition": "Random House",
        "price": 5.75
     }, 
     {
        "image":"./Assets/images/TomS.jpg",
        "title": "Tom Sawyer",
        "author": "Twain, Mark",
        "year_written": 1862,
        "edition": "Random House",
        "price": 7.75
     }, 
     {
        "image":"./Assets/images/RoomOne.jpg",
        "title": "A Room of One's Own",
        "author": "Woolf, Virginia",
        "year_written": 1922,
        "edition": "Penguin",
        "price": 29
     }, 
     {
        "image":"./Assets/images/HarryPotter.jpeg",
        "title": "Harry Potter",
        "author": "Rowling, J.K.",
        "year_written": 2000,
        "edition": "Harcourt Brace",
        "price": 19.95
     }, 
     {
        "image":"./Assets/images/Hundred.jpeg",
        "title": "One Hundred Years of Solitude",
        "author": "Marquez",
        "year_written": 1967,
        "edition": "Harper Perennial",
        "price": 14.00
     }, 
     {
        "image":"./Assets/images/Hamlet.jpg",
        "title": "Hamlet, Prince of Denmark",
        "author": "Shakespeare",
        "year_written": 1603,
        "edition": "Signet Classics",
        "price": 7.95
     }, 
     {
        "image":"./Assets/images/LordRings.jpg",
        "title": "Lord of the Rings",
        "author": "Tolkien, J.R.",
        "year_written": 1937,
        "edition": "Penguin",
        "price": 27.45
     }
  ]

let cart = JSON.parse(localStorage.getItem("cart"))
? JSON.parse(localStorage.getItem("cart"))
: []

// READ BOOKS
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
            </div>
             
            <div
            class="modal fade"
            id="editBook${position}"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit ${product.title}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="editTitle${position}" class="form-label">Title</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editTitle${position}"
                      id="editTitle${position}"
                      value="${product.title}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editAuthor${position}" class="form-label">Author</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editAuthor${position}"
                      id="editAuthor${position}"
                      value="${product.title}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editEdition${position}" class="form-label">Edition</label>
                    <select
                      class="form-select"
                      name="editEdition${position}"
                      id="editEdition${position}"
                    >
                    <option value="Penguin">Penguin</option>
                    <option value="Harcourt Brace">Harcourt Brace</option>
                    <option value="Random House">Random House</option>
                    <option value="Harper Perennial">Harper Perennial</option>
                    <option value="Signet Classics">Signet Classics</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="editYear${position}" class="form-label">Year Written</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editYear${position}"
                      id="editYear${position}"
                      value="${product.price}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editPrice${position}" class="form-label">Price</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editPrice${position}"
                      id="editPrice${position}"
                      value="${product.price}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editImage${position}" class="form-label">Image URL</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editImage${position}"
                      id="editImage${position}"
                      value="${product.Image}"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    onclick="updateBook(${position})"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
  `;
  });
  }
  
  readBooks(books);


// CREATE a BOOK
function createBook() {
    let title = document.querySelector("#addTitle").value;
    let edition = document.querySelector("#addEdition").value;
    let price = document.querySelector("#addPrice").value;
    let image = document.querySelector("#addImage").value;
    let year = document.querySelector("#addYear").value;
    let author = document.querySelector("#addAuthor").value;
  
    try {
      if (!title || !price || !image) throw new Error("Please fill in all fields");
      books.push({
        title,
        edition,
        price,
        image,
        year,
        author
      });
      localStorage.setItem("products", JSON.stringify(books));
      readBooks(books);
    } catch (err) {
      alert(err);
      console.log(err)
    }
  }
// UPDATE A BOOK
  function updateBook(position) {
    let title = document.querySelector(`#editTitle${position}`).value;
    let edition = document.querySelector(`#editEdition${position}`).value;
    let price = document.querySelector(`#editPrice${position}`).value;
    let image = document.querySelector(`#editImage${position}`).value;
    let year = document.querySelector(`#editYear${position}`).value;
    let author = document.querySelector(`#editAuthor${position}`).value;
  
    try {
      if (!title || !price || !image) throw new Error("Please fill in all fields");
      books[position] = {
        title,
        edition,
        price,
        image,
        year,
        author
      };
      localStorage.setItem("products", JSON.stringify(books));
      readBooks(books);
    } catch (err) {
      alert(err);
    }
  }

// DELETE A BOOK
function deleteBook(position) {
    let confirmation = confirm(
      "Are you sure you want to delete the selected product?"
    );
  
    if (confirmation) {
      books.splice(position, 1);
      localStorage.setItem("products", JSON.stringify(books));
      readBooks(books);
    }
  }
  



// ADD TO CART
function addToCart(position){
    let quantity = document.querySelector(`#addToCart${position}`).value
    cart.push({quantity, ...books[position]})
    // cart.push({...products[position]});
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart)
  }