let books = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        image: "./Assets/images/AbbeyN.jpg",
        title: "Northanger Abbey",
        author: "Austen, Jane",
        year: 1814,
        edition: "Penguin",
        price: 199.99,
      },
      {
        image: "./Assets/images/WarPeace.jpeg",
        title: "War and Peace",
        author: "Tolstoy, Leo",
        year: 1865,
        edition: "Penguin",
        price: 159.99,
      },
      {
        image: "./Assets/images/AnnaK.jpeg",
        title: "Anna Karenina",
        author: "Tolstoy, Leo",
        year: 1875,
        edition: "Penguin",
        price: 119.99,
      },
      {
        image: "./Assets/images/mrs-dalloway-162.jpg",
        title: "Mrs. Dalloway",
        author: "Woolf, Virginia",
        year: 1925,
        edition: "Harcourt Brace",
        price: 249.99,
      },
      {
        image: "./Assets/images/hours.jpg",
        title: "The Hours",
        author: "Cunnningham, Michael",
        year: 1999,
        edition: "Harcourt Brace",
        price: 220.00,
      },
      {
        image: "./Assets/images/FinnH.jpeg",
        title: "Huckleberry Finn",
        author: "Twain, Mark",
        year: 1865,
        edition: "Penguin",
        price: 70.00,
      },
      {
        image: "./Assets/images/house.jpg",
        title: "Bleak House",
        author: "Dickens, Charles",
        year: 1870,
        edition: "Random House",
        price: 70.00,
      },
      {
        image: "./Assets/images/TomS.jpg",
        title: "Tom Sawyer",
        author: "Twain, Mark",
        year: 1862,
        edition: "Random House",
        price: 85.00,
      },
      {
        image: "./Assets/images/RoomOne.jpg",
        title: "A Room of One's Own",
        author: "Woolf, Virginia",
        year: 1922,
        edition: "Penguin",
        price: 329.99,
      },
      {
        image: "./Assets/images/HarryPotter.jpeg",
        title: "Harry Potter",
        author: "Rowling, J.K.",
        year: 2000,
        edition: "Harcourt Brace",
        price: 260.00,
      },
      {
        image: "./Assets/images/Hundred.jpeg",
        title: "One Hundred Years of Solitude",
        author: "Marquez",
        year: 1967,
        edition: "Harper Perennial",
        price: 170.00,
      },
      {
        image: "./Assets/images/Hamlet.jpg",
        title: "Hamlet, Prince of Denmark",
        author: "Shakespeare",
        year: 1603,
        edition: "Signet Classics",
        price: 130.00,
      },
      {
        image: "./Assets/images/LordRings.jpg",
        title: "Lord of the Rings",
        author: "Tolkien, J.R.",
        year: 1937,
        edition: "Penguin",
        price: 741.00,
      },
      {
        image: "./Assets/images/GOT.jpg",
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        year: 1996,
        edition: "Penguin",
        price: 879.00,
      },
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// READ BOOKS
function readBooks(items) {
  document.querySelector("#products").innerHTML = "";
  items.forEach((book, position) => {
    document.querySelector("#products").innerHTML += `
        
        <div class="card">
          <Image src="${book.image}" class="card-Image-top" alt="${book.title}">
          <div class="card-body">
            <h4 class="card-title">${book.title}</h4>
            <p><strong> ${book.title} </strong></p>
            <p> by ${book.author} - ${book.year} </p>
            <p class="card-text">R<strong> ${parseInt(book.price)}</strong></p>
            <div d-flex-nowrap>
            <input type="number" value=1 class="cart" min=1 id="addToCart${position}">
            <button type="button" class="btn btn-secondary addToCart"  onclick="addToCart( ${position} )"><i class='fas fa-cart-plus'></i>
            <p class="write">Add to Cart</p>
            </button>
            
          
            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#editBook${position}" ><i class='fas fa-edit'></i>
             <p class="write"> Edit</p>
            </button>
            <button type="button" class="btn btn-dark" onclick="deleteBook(${position})" ><i class='fas fa-trash-alt'></i>
            <p class="write">Delete</p>
            </button>
            </div>
            
            <!-- Modal Class -->
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
                    Edit ${book.title}
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
                      value="${book.title}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editAuthor${position}" class="form-label">Author</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editAuthor${position}"
                      id="editAuthor${position}"
                      value="${book.title}"
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
                    <label for="editYear${position}" class="form-label">Year Published</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editYear${position}"
                      id="editYear${position}"
                      value="${book.year}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editPrice${position}" class="form-label">Price</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editPrice${position}"
                      id="editPrice${position}"
                      value="${parseInt(book.price)}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editImage${position}" class="form-label">Image URL</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editImage${position}"
                      id="editImage${position}"
                      value="${book.image}"
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
  let price = parseInt(document.querySelector("#addPrice").value);
  let image = document.querySelector("#addImage").value;
  let year = document.querySelector("#addYear").value;
  let author = document.querySelector("#addAuthor").value;

  try {
    if (!title || !price || !image)
      throw new Error("Please fill in all fields");
    books.push({
      title,
      edition,
      price,
      image,
      year,
      author,
    });
    localStorage.setItem("Books", JSON.stringify(books));
    readBooks(books);
  } catch (err) {
    alert(err);
    console.log(err);
  }
}
// UPDATE A BOOK
function updateBook(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let edition = document.querySelector(`#editEdition${position}`).value;
  let price = parseInt(document.querySelector(`#editPrice${position}`).value);
  let image = document.querySelector(`#editImage${position}`).value;
  let year = document.querySelector(`#editYear${position}`).value;
  let author = document.querySelector(`#editAuthor${position}`).value;

  try {
    if (!title || !price || !image)
      throw new Error("Please fill in all fields");
    books[position] = {
      title,
      edition,
      price,
      image,
      year,
      author,
    };
    localStorage.setItem("Books", JSON.stringify(books));
    readBooks(books);
  } catch (err) {
    alert(err);
  }
}

// DELETE A BOOK
function deleteBook(position) {
  let confirmation = confirm(
    `Are you sure you want to remove ${books[position].title.toUpperCase()} from the list?`
  );

  if (confirmation) {
    books.splice(position, 1);
    localStorage.setItem("Books", JSON.stringify(books));
    readBooks(books);
  }
}

// ADD TO CART
function addToCart(position) {
  let quantity = document.querySelector(`#addToCart${position}`).value;
  cart.push({ quantity, ...books[position] });
  // cart.push({...books[position]});
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
}


// SORT BY
// SORT BY EDITION
function sortEdition() {
  let edition = document.querySelector("#sortEdition").value;

  if (edition == "All") {
    return readBooks(books);
  }

  let foundBooks = books.filter(book => {
    return book.edition == edition;
  });

  readBooks(foundBooks);
  console.log(foundBooks);
}

// SORT BY NAME

function sortName() {
  let direction = document.querySelector("#sortTitle").value;

  let sortedBooks = books.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedBooks.reverse();
  console.log(sortedBooks);
  readBooks(books);
}

// SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedBooks = books.sort((a, b) => a.price - b.price);

  console.log(sortedBooks);

  if (direction == "descending") sortedBooks.reverse();
  readBooks(sortedBooks);
}
