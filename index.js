const cards = document.querySelectorAll(".card")
let num=1
let sumOfPrice=0;

for (let card of cards){
    card.addEventListener("click", function () {
       const title= card.querySelector("h3").innerText
    //    Add title 
        const titleContainer =document.getElementById("title-container")
        let p =document.createElement("p")
        p.innerText=num + ". "+title
        titleContainer.append(p)
        num++


    // Add to total price
        const price =parseFloat(card.querySelector("span").innerText.split(" ")[1])
        sumOfPrice +=price
       document.getElementById("totalPrice").innerText=sumOfPrice.toFixed(2)
    
    

    
    // let discount = sumOfPrice * 2.5

    //    console.log(typeof totalPrice);
    document.getElementById("total").innerText=sumOfPrice.toFixed(2)



    })
}


 // Find input value and button
    document.getElementById("apply-btn").addEventListener("click", function () {
    let inputValue =document.getElementById("input-field").value
    if (sumOfPrice>=200) {
        if (inputValue.toLowerCase() === "sell200") {
            let off =document.getElementById("discountPrice").innerText=(sumOfPrice*20)/100
            document.getElementById("total").innerText=sumOfPrice-off.toFixed(2)


        }else{
            alert("Inveled Copone")
        }
    }else{
        alert("Bay More For Discount ")
    }
             
 })
