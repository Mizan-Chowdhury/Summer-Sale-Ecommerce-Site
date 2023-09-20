function cards(data) {
  const cardsNameValue = data.childNodes[3].childNodes[3].innerText;
  const p = document.createElement("p");
  const nameListBox = document.getElementById("productNameList");
  nameListBox.appendChild(p);
  const count = nameListBox.childElementCount;
  p.innerText = count + ". " + cardsNameValue;

  //   total price
  const cardsPriceValue =
    data.childNodes[3].childNodes[5].innerText.split(" ")[0];
  const totalPriceValue = document.getElementById("totalPrice");
  const totalPriceValueString = totalPriceValue.innerText;
  const totalPrice =
    parseFloat(totalPriceValueString) + parseFloat(cardsPriceValue);
  totalPriceValue.innerText = totalPrice.toFixed(2);

  if (totalPrice > 0) {
    document.getElementById("btn-2").removeAttribute("disabled");
  }
  if (totalPrice >= 200) {
    document.getElementById("btn1").removeAttribute("disabled");
  }
}

function btn1() {
  const couponBtn = document.getElementById("couponBtn").innerText;
  const couponCode = document.getElementById("couponCode").value;
  const totalPriceDiscount = totalPrice.innerText;
  if (couponCode === couponBtn) {
    //   discount price
    const discountPrice = totalPriceDiscount - totalPriceDiscount * 0.8;
    const discountPriceFixed = discountPrice.toFixed(2);
    document.getElementById("diccountPrice").innerText = discountPriceFixed;
    //   after discount price
    const afterDiscountPrice = totalPriceDiscount - totalPriceDiscount * 0.2;
    const afterDiscountPriceFixed = afterDiscountPrice.toFixed(2);
    document.getElementById("afterDiccountPrice").innerText =
      afterDiscountPriceFixed;
  }
}
const nameListBox = document.getElementById("productNameList");
function btn2() {
  while (nameListBox.firstChild) {
    nameListBox.removeChild(nameListBox.firstChild);
  }
  document.getElementById("totalPrice").innerText = "00";
  document.getElementById("diccountPrice").innerText = "00";
  document.getElementById("afterDiccountPrice").innerText = "00";
  document.getElementById("btn-2").setAttribute("disabled", true);
  document.getElementById("btn1").setAttribute("disabled", true);
  document.getElementById("couponCode").value = "";
}
