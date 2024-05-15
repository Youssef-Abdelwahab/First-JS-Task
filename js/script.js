let addProduct = document.querySelectorAll("#addToCard1 , #addToCard2 , #addToCard3 , #addToCard4 , #addToCard5 , #addToCard6 , #addToCard7 , #addToCard8 , #addToCard9");
let listOfProducts = document.querySelector("#listOfProducts");
let numOfProducts = document.querySelector("#numOfProducts");
let btnTotalPrice = document.querySelector("#TotalPrice");
let showTotalPrice = document.querySelector("#showTotalPrice");
let empty = document.querySelector("#empty");


let sumOfPrice = 0;
let number = 0;
numOfProducts.innerHTML = number;

addProduct.forEach(function (item) {
    item.onclick = function () {
        empty.style.display = "none";
        showTotalPrice.style.display = "none";
        btnTotalPrice.style.display = "block";
        listOfProducts.innerHTML += "<span class=\"h4\">" + item.getAttribute("name") + "</span>" + "<span class=\"position-absolute end-0 me-3\"> ( " + formatPrice(item.getAttribute("price")) + " EGP )</span>" + "<hr>";
        numOfProducts.innerHTML = ++number;
        sumOfPrice += +(item.getAttribute("price"));
    }
})

btnTotalPrice.onclick = function () {
    showTotalPrice.style.display = "block";
    showTotalPrice.innerHTML = "Total Price = " + "<b>" + formatPrice(sumOfPrice) + "</b>" + " EGP";
}

function formatPrice(num) {
    let number = +(num);
    const formattedNumber = number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return formattedNumber;
}

let stars = [["#star11", "#star12", "#star13", "#star14", "#star15"],
["#star21", "#star22", "#star23", "#star24", "#star25"],
["#star31", "#star32", "#star33", "#star34", "#star35"],
["#star41", "#star42", "#star43", "#star44", "#star45"],
["#star51", "#star52", "#star53", "#star54", "#star55"],
["#star61", "#star62", "#star63", "#star64", "#star65"],
["#star71", "#star72", "#star73", "#star74", "#star75"],
["#star81", "#star82", "#star83", "#star84", "#star85"],
["#star91", "#star92", "#star93", "#star94", "#star95"]];

for (let i = 0; i < stars.length; i++) {
    for (let j = 0; j < stars[i].length; j++) {
        document.querySelector(stars[i][j]).classList.add("colored");
        document.querySelector(stars[i][j]).onclick = function () {
            for (let k = 0; k <= j; k++) {
                document.querySelector(stars[i][k]).classList.add("colored");
            }
            for (let k = (j + 1); k < stars[i].length; k++) {
                document.querySelector(stars[i][k]).classList.remove("colored");
            }
        }
    }
}