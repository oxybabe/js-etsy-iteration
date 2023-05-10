(function () {
  "use strict";
  console.log({ items });

  // 1. Show me how to calculate the average price of all items listed in USD. Please `console.log` the average.
  // ```
  // The average price is $23.86 variables: (total price, average price, total # items)
  //loop through the array
  let totalSum = 0;
  let averagePrice = 0;
  totalSum = items.reduce((sum, item) => {
    sumPrice(sum, item.price), 0;
    averagePrice = totalSum / items.length;
    console.log("averagePrice:" + averagePrice);

  });

  function averagePrice(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].price != null) {
        //price is not null which means the price exists for that item
        // console.log(items[i]);
        sum += items[i].price; //adding the items with price attribute
      }
    }
    let average = sum / items.length;
    console.log(average);
    return average;
  }
  //2.
items.forEach(item => print14To18Price(item));
function print14To18Price(item) 


  function itemPrice(cost) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].price != null && 14 <= items[i].price <= 18) {
        console.log(items[i]);
      }
    }
  }
  console.log(items.filter(itemPrice));

  //3. Show me how find the item with a "GBP" currency code and print its name and price. Please `console.log` the one you find.
})();
