document.getElementById("age").addEventListener("input", function () {
  var age = parseInt(this.value);
  var adultCard = document.getElementById("adultCard");
  var childCard = document.getElementById("childCard");

  if (age <= 0) {
    // document.write("<h1>Welcome in Future world!</h1>");
    adultCard.style.display = "block";
    childCard.style.display = "block";
  } else if (age < 18) {
    adultCard.style.display = "none";
    childCard.style.display = "block";
  } else if (age >= 18) {
    adultCard.style.display = "block";
    childCard.style.display = "none";
  }
  //  else {
  //    adultCard.style.display = 'none';
  //   childCard.style.display = 'none';
  //   document.write("<h1>Sorry It's not for You.</h1>");

  // }
});
