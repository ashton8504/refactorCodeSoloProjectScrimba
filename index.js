// updated and removed data from index.js and seperated into its own file
import { sunglassesOptions } from "./data.js"
import { sunglasses } from "./data.js"

// Updated from var to Const
const productDetailsEl = document.getElementById("productDetails")
const productImage = document.getElementById("productImage")
const productFrames = document.getElementsByClassName("product-image_frame")[0]
const productLenses = document.getElementsByClassName("product-image_lenses")[0]

// Updated from var to let
let sunglassesNew = ''

// updated to an arrow function
 const setSunglasses = (sunglassesNew = sunglasses) => {
    return sunglassesNew
}

// Arrow Function
const render = (sunglassesNew) => {
    // Destructered
    const { model, lenses, frame } = sunglassesNew;
  
    // updated from var to const
    const updatedSunglasses = {
      model: {
        name: model.name,
        price: model.price,
        thumbImg: model.thumbImg,
        cssClass: model.cssClass,
      },
      lenses: {
        color: lenses.color,
        price: lenses.price,
        cssClass: lenses.cssClass,
      },
      frame: {
        color: frame.color,
        price: frame.price,
        cssClass: frame.cssClass,
      },
    };
  
    // updated from var to const
    const price = `$${model.price + lenses.price + frame.price}`;
  
    productDetailsEl.innerHTML = `
      <h1>${model.name}</h1>
      <p>Custom: ${lenses.color} lenses, ${frame.color} frames</p>
      <p>${price}</p>
    `;
  
    // udpated from var to const
    const currClass = productImage.classList[1];
    productImage.classList.replace(currClass, updatedSunglasses.model.cssClass);
    //udpated from var to const
    const currFramesClass = productFrames.classList[1];
    productFrames.classList.replace(currFramesClass, updatedSunglasses.frame.cssClass);
    //udpated from var to const
    const currLensesClass = productLenses.classList[1];
    productLenses.classList.replace(currLensesClass, updatedSunglasses.lenses.cssClass);
  };
  

//Highlight current selection
// Updated to an arrow function
const addHighlight = (clickedItem) => {
    if (clickedItem.classList.contains("product-thumb")) {
        Array.from(document.getElementsByClassName("product-thumb"))
            .forEach(function(thumb) {
               thumb.classList.remove("selected") 
            }) 
    } else if (clickedItem.classList.contains("product-color-swatch")) {
        const siblings = clickedItem.closest("ul").querySelectorAll("button")
        Array.from(siblings)
            .forEach(function(swatch) {
               swatch.classList.remove("selected") 
            })
    }
    clickedItem.classList.add("selected") 
}


document.body.addEventListener("click", (event) => {
    const clickedItem = event.target
    //if sunglassesNew defined take variable from updates 
        //else use original sunglasses object
    if (!sunglassesNew) {
        sunglassesNew = sunglasses
    }
    
    // update model
    if (clickedItem.classList.contains("product-thumb")) {

        // Updated from Var to const
        const currName = clickedItem.dataset.name
        // Updated from Var to const
        const modelOptions = sunglassesOptions.models
        .filter(function(item) {
            return item.name === currName
        })[0]

        // Updated from Var to const
        const name = modelOptions.name
        const price = modelOptions.price
        const thumbImg = modelOptions.thumbImg
        const cssClass = modelOptions.cssClass
        
        sunglassesNew = {
            model: {
                name: name,
                price: price,
                thumbImg: sunglassesNew.model.thumbImg,
                cssClass: cssClass,
            },
            lenses: {
                color: sunglassesNew.lenses.color,
                price: sunglassesNew.lenses.price,
                cssClass: sunglassesNew.lenses.cssClass,
            },
            frame: {
                color: sunglassesNew.frame.color,
                price: sunglassesNew.frame.price,
                cssClass: sunglassesNew.frame.cssClass,
            }     
        }
       
        addHighlight(clickedItem)
        setSunglasses(sunglassesNew)
        render(sunglassesNew)
    }
    
    // update colors for frames / lenses
    if (clickedItem.classList.contains("product-color-swatch")) {
        //updated var to const
        const currColor = clickedItem.dataset.color
        
        // check nearest parent div
            //lenses
        if (clickedItem.closest("div").classList[0] === "product-lenses") {
            //updated var to const
            const colorOptions = sunglassesOptions.lenses
            .filter(function(item) {
                return item.color === currColor
            })[0]
            
            //updated var to const
            const color = colorOptions.color
            const price = colorOptions.price
            const cssClass = colorOptions.cssClass
        
            sunglassesNew = {
                model: {
                    name: sunglassesNew.model.name,
                    price: sunglassesNew.model.price,
                    thumbImg: sunglassesNew.model.price,
                    cssClass: sunglassesNew.model.cssClass,
                },
                lenses: {
                    color: color,
                    price: price,
                    cssClass: cssClass,
                },
                frame: {
                    color: sunglassesNew.frame.color,
                    price: sunglassesNew.frame.price,
                    cssClass: sunglassesNew.frame.cssClass,
                }     
            }
        } 
        
        //frames
        else {
            //updated var to const
            const colorOptions = sunglassesOptions.frames
                // Arrow function updated
            .filter((item) =>{
                return item.color === currColor
            })[0]
            
            const color = colorOptions.color
            const price = colorOptions.price
            const cssClass = colorOptions.cssClass
            
            sunglassesNew = {
                model: {
                    name: sunglassesNew.model.name,
                    price: sunglassesNew.model.price,
                    thumbImg: sunglassesNew.model.price,
                    cssClass: sunglassesNew.model.cssClass,
                },
                lenses: {
                    color: sunglassesNew.lenses.color,
                    price: sunglassesNew.lenses.price,
                    cssClass: sunglassesNew.lenses.cssClass,
                },
                frame: {
                    color: color,
                    price: price,
                    cssClass: cssClass,
                }     
            }
        }

        addHighlight(clickedItem)
        setSunglasses(sunglassesNew)
        render(sunglassesNew)
    }
})

render(sunglasses)
