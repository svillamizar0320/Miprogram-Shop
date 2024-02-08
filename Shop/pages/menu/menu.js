Page({
  data: {},
  onLoad() {},
  increaseamount(id) {
    var amountview = document.getElementById ('number-'+id);
    var amount = parseInt(amountview.innerText);
    amountview.innerText = amount + 1;
  },
  decreaseamount(id) {
    var amountview = document.getElementById('amount-'+id);
    var amount = parseInt(amountviewinnerText) ;
    if (amount>0) {amountview.innerText = amount - 1}
  }
});
