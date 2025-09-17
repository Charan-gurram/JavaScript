const productInformation = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        brand: "Sony",
        actualPrice: 5999,
        discountedPrice: 4499,
        ratings: [5, 4, 4, 5, 3],
        quantity: 120,
        description: "Noise-cancelling over-ear headphones with 30 hours battery life.",
        inStock: true,
        image: "https://picsum.photos/id/1011/400/400",
    },
    {
        id: 2,
        name: "Smart LED TV 43 inch",
        category: "Electronics",
        brand: "Samsung",
        actualPrice: 28999,
        discountedPrice: 23999,
        ratings: [4, 4, 5, 5, 4, 3],
        quantity: 45,
        description: "Ultra HD 4K Smart TV with voice assistant and multiple apps.",
        inStock: true,
        image: "https://picsum.photos/id/1015/400/400",
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Footwear",
        brand: "Nike",
        actualPrice: 3999,
        discountedPrice: 2999,
        ratings: [5, 5, 4, 4, 4],
        quantity: 80,
        description: "Lightweight, breathable running shoes for daily workouts.",
        inStock: true,
        image: "https://picsum.photos/id/1020/400/400",
    },
    {
        id: 4,
        name: "Stainless Steel Water Bottle",
        category: "Home & Kitchen",
        brand: "Milton",
        actualPrice: 899,
        discountedPrice: 599,
        ratings: [4, 5, 4, 3, 5],
        quantity: 300,
        description: "Hot & cold vacuum insulated water bottle, 1L capacity.",
        inStock: true,
        image: "https://picsum.photos/id/1025/400/400",
    },
    {
        id: 5,
        name: "Gaming Laptop",
        category: "Computers",
        brand: "Asus",
        actualPrice: 99999,
        discountedPrice: 84999,
        ratings: [5, 5, 4, 5, 4, 5],
        quantity: 25,
        description: "RTX 4060, Intel i7, 16GB RAM, 1TB SSD – perfect for gaming & work.",
        inStock: true,
        image: "https://picsum.photos/id/1035/400/400",
    },
    {
        id: 6,
        name: "Cotton T-Shirt",
        category: "Fashion",
        brand: "H&M",
        actualPrice: 799,
        discountedPrice: 499,
        ratings: [4, 3, 5, 4, 4],
        quantity: 200,
        description: "100% cotton casual wear T-shirt for men & women.",
        inStock: true,
        image: "https://picsum.photos/id/1040/400/400",
    }
];
const productcontainer = document.getElementById("productcontainer");
const productsinfo=productInformation.map((p)=>

    `
     <div class="productcard">
     <img src=${p.image}><img>
     <p>${p.name}</p>
     <h2>Price : <strike>${p.actualPrice}</strike></h2>
     <h3>Discounted price : ${p.discountedPrice}</h3>
      <button>Add to Cart</button>
     </div>

    `
).join("")
productcontainer.innerHTML=productsinfo;
const button =   document.getElementById("submit");
button.addEventListener("click",()=>{
    const minprice =  document.getElementById("min").value
    const maxprice =  document.getElementById("max").value
    const filtered=   productInformation.filter((product)=>product.actualPrice>=minprice && product.actualPrice<=maxprice)
    const filtereddata=filtered.map((p)=>

    `
     <div class="productcard">
     <img src=${p.image}><img>
     <p>${p.name}</p>
     <h2>Price : <strike>${p.actualPrice}</strike></h2>
     <h3>Discounted price : ${p.discountedPrice}</h3>
      <button>Add to Cart</button>
     </div>

    `
).join("")
productcontainer.innerHTML=filtereddata;
})
const sortbutton=document.getElementById("sort")
sortbutton.addEventListener("click",()=>{
    const sorted=productInformation.sort((a,b)=>a.actualPrice-b.actualPrice);
    // productcontainer.style.backgroundColor="green";
    const sorteddata=sorted.map((p)=>{
     return `
     <div class="productcard">
     <img src=${p.image}><img>
     <p>${p.name}</p>
     <h2>Price : <strike>${p.actualPrice}</strike></h2>
     <h3>Discounted price : ${p.discountedPrice}</h3>
     <button>Add to Cart</button>
     </div>
        `
    }).join("")
    productcontainer.innerHTML=sorteddata;
})


