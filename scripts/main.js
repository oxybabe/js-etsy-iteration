(function () {
  "use strict";
  console.log({ items });

  // 1. Show me how to calculate the average price of all items listed in USD. Please `console.log` the average.
  // ```
  // The average price is $23.86 variables: (total price, average price, total # items)
  //loop through the array
  // function average(items) {
  //   sum = 0;
  //   items.forEach((price) => {
  //     sum += price;
  //   });
  //   return sum / items.length;
  // }
  // console.log(average([items]));


  // function averagePrice(items) {
  //   const priceItems = items.reduce (
  //     (items, price) => [...items, ...price], 
  //   );
  // };


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

  
  function itemPrice(cost) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].price != null && 14 <= items[i].price <= 18) {
        console.log(items[i]);
      }
    }
  };
  console.log(items.filter(itemPrice))

  
})();

