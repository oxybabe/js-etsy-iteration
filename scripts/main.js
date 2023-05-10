(function () {
  "use strict";
  console.log({ items });

  // 1. Show me how to calculate the average price of all items listed in USD. Please `console.log` the average.
  // ```
  // The average price is $23.86 variables: (total price, average price, total # items)
  //loop through the array

  let averagePrice = 0;
  const totalPrice = items.reduce((sum, item) => {
    return sum + item.price
  }, 0);
  console.log(averagePrice)
  //using the filter method; when objects match a specific criteria
  const itemsInUSD = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].currency_code === "USD") {
      //price is not null which means the price exists for that item
      // console.log(items[i]);
      itemsinUSD.push(items[i]); //adding the items with price attribute
    }
  };

  //map method
  const priceArray = itemsInUSD.map(function (item) {
    //start with an array of objects and return
    return item.price; //a price array
  }); //array of objects

  //reduce method
  const sumOfPrices = priceArray.reduce(function (acc, i) {
    //acc=accumulated value
    return acc + i;
  }, 0); //array of price
  const averagePriceUSDItems = sumOfPrices / priceArray.length;
  console.log(`The average price is $${averagePriceUSDitems}.`);

  //filter method
  const itemsinUSD = items.filter(function (item) {
    //filter will execute for each function, if the item is truthy, it will iterate through that function
    return item.currency_code === "USD"; //returns a Boolean
  }); //array of values

  //be careful about putting the ; when you chain the methods

  //2.
  function itemPrice(cost) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].price != null && 14 <= items[i].price <= 18) {
        console.log(items[i]);
      }
    }
  }
  console.log(items.filter(itemPrice));

  //filter method
  const filterPrices = items.filter(function (item) {
    item.price >= 14 && item.price <= 18 && item.currency_code === "USD";
  });
  //then could have done the filter method
  filterPrices.forEach(function (item) {
    console.log(item.title);
  });

  //3. Show me how find the item with a "GBP" currency code and print its name and price. Please `console.log` the one you find.
  const itemGBP = items.filter(function (item) {
    return item.currency_code === "GBP"; //returns an array
  });
  itemGBP.forEach(function (item) {
    console.log(`${item.name} costs ${item.price}.`);
  });

  //4. items made of wood

  const itemsMadeOfWood = items.filter(function (item) {
    return item.materials.includes("wood");
  });
  itemsMadeOfWood.forEach(function (item) {
    console.log(item.title);
  });

  //5. eight or more materials
  const eightOrMore = items.filter(function (item) {
    return item.materials.length >= 8;
  });

  eightOrMore.forEach(function (item) {
    //array of objects whose materials have 8 or more elements inside teh array
    console.log(item.title); //for each one we will console log the title and will console log for each material
    item.materials.forEach(function (material) {
      console.log(material);
    });
  });

  6; //Show me how to calculate how many items were made by their sellers. Please `console.log` your answer.

  const itemsBySeller = items.filter(function (item) {
    return item.who_made === "i_did";
  });
  console.log(itemsBySeller);
})();
