async function getProducts(){
    const data=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json/",
     {method:"GET"});
    const products=await data.json();
    // console.log(products.brand);
    // console.log(products);
    products.forEach((product)=>createProduct(product));
    }
    function createProduct({name,price_sign,price,brand,description,image_link,product_link}){
        const info=document.createElement("div");
    info.setAttribute("class","container");
    
    info.innerHTML=`
    <table>
    <div class="product-container">
    <tr>
    <td>
    <div class="image-container">
            <img class="image" src=${image_link} width="300px"  height="250px"/>
        </div>
    </td>
    <td>
     <div class="details">
        <h3>ProductName:${name}</h3>
        <p>Price:${price_sign+price}</p>
        <p>Brand:${brand}</p>
            <p>Description:${description}</p>
        <a href=${product_link}>Visit Product</a>
        </div>
      </td>
      </tr>
     </div>
     </table>
    `;
    document.querySelector(".product-list").append(info);
    }
    getProducts();
    
    function searchProduct(){
    let brand=["almay",
    "alva",
    "anna sui",
    "annabelle",
    "benefit",
    "boosh",
    "burt's bees",
    "butter london",
    "c'est moi",
    "cargo cosmetics",
    "china glaze",
    "clinique",
    "coastal classic creation",
    "colourpop",
    "covergirl",
    "dalish",
    "deciem",
    "dior",
    "dr. hauschka",
    "e.l.f.",
    "essie",
    "fenty",
    "glossier",
    "green people",
    "iman",
    "l'oreal",
    "lotus cosmetics usa",
    "maia's mineral galaxy",
    "marcelle",
    "marienatie",
    "maybelline",
    "milani",
    "mineral fusion",
    "misa",
    "mistura",
    "moov",
    "nudus",
    "nyx",
    "orly",
    "pacifica",
    "penny lane organics",
    "physicians formula",
    "piggy paint",
    "pure anada",
    "rejuva minerals",
    "revlon",
    "sally b's skin yummies",
    "salon perfect",
    "sante",
    "sinful colours",
    "smashbox",
    "stila",
    "suncoat",
    "w3llpeople",
    "wet n wild",
    "zorah",
    "zorah biocosmetiques"];
      const searchtxt=document.getElementById("mytext").value;
      for(let i=0;i<brand.length;i++)
        {
          try{
          if(brand[i]===searchtxt)
            {
              console.log("product Found")
              // console.log(searchtxt)
              createBrandProduct(brand[i],searchtxt)
              // break;
            }
          }
      
    catch{
            console.log("No results found")
          }
      }
    }
    async function createBrandProduct(brand,searchtxt){
      const data=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${brand}=${searchtxt}`);                       
              const products=await data.json();
              console.log(products);
              products.forEach((product)=>createProduct(product));
    }
    