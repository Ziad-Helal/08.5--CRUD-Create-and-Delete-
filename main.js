var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDesc = document.getElementById("productDesc");
var productCat = document.getElementById("productCat");
var btn = document.getElementById("btn");
var tableRow = document.getElementById("tableRow");
var productsList = [];

btn.onclick = addProduct;

function addProduct() {
  productsList.push({
    productName: productName.value,
    productPrice: productPrice.value,
    productDesc: productDesc.value,
    productCat: productCat.value,
  });
  displayProduct();
  clearForm();
}

function displayProduct() {
  var rows = "";
  productsList.forEach(function (product, index) {
    rows += `
      <tr>
        <td>${index + 1}</td>
        <td>${product.productName}</td>
        <td>${product.productPrice}</td>
        <td>${product.productDesc}</td>
        <td>${product.productCat}</td>
        <td><button class="btn btn-danger" onclick="deleteProduct(${index})">Delete</td>
        <td><button class="btn btn-info">Update</td>
      </tr>
    `;
  });
  tableRow.innerHTML = rows;
}

function deleteProduct(index) {
  productsList.splice(index, 1);
  displayProduct();
}

function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productDesc.value = "";
  productCat.value = "";
}
