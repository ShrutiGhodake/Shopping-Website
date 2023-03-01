let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "images/product/product-1.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "images/product/product-2.jpg",
      },
      {
        productName: "Trousers",
        category: "Bottomwear",
        price: "99",
        image: "images/product/product-3.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "images/product/product-4.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "images/product/product-5.jpg",
      },
      {
        productName: "Stylish Pink Shirt",
        category: "Topwear",
        price: "89",
        image: "images/product/product-6.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "images/product/product-7.jpg",
      },
      {
        productName: "Digi Watch",
        category: "Watch",
        price: "49",
        image: "images/product/product-8.jpg",
      },
      {
        productName: "Fast track",
        category: "Watch",
        price: "49",
        image: "images/product/product-9.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Shoes",
        price: "49",
        image: "images/product/product-10.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Shoes",
        price: "49",
        image: "images/product/product-11.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "images/product/product-12.jpg",
      },
      {
        productName: "Green Shirt",
        category: "Topwear",
        price: "49",
        image: "images/product/product-13.jpg",
      },
      {
        productName: "Black Shirt",
        category: "Topwear",
        price: "49",
        image: "images/product/product-14.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Shoes",
        price: "49",
        image: "images/product/f1-.jpg",
      },
      {
        productName: "Leather Jacket",
        category: "Jacket",
        price: "49",
        image: "images/product/f6.jpg",
      },
      {
        productName: "Gray Jacket",
        category: "Jacket",
        price: "49",
        image: "images/product/f7.jpg",
      },
      {
        productName: "Dennim Jacket",
        category: "Jacket",
        price: "49",
        image: "images/product/f8.jpg",
      },
      {
        productName: "Comfy Gray Jacket",
        category: "Jacket",
        price: "49",
        image: "images/product/f9.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "images/product/f10.jpg",
      },
      {
        productName: "Sneakers",
        category: "Shoes",
        price: "49",
        image: "images/product/buy-2.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "images/product/buy-3.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Shoes",
        price: "49",
        image: "images/product/category-1.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Shoes",
        price: "49",
        image: "images/product/category-2.jpg",
      },
      {
        productName: "Smart watch",
        category: "Watch",
        price: "49",
        image: "images/product/exclusive.png",
      },
      
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };