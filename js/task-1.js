"use strict";

function showCategoriesLog() {
  const items = document.querySelectorAll("li.item");

  console.log(`Number of catagories :  ${items.length}`);

  items.forEach((item) => {
    const categoryName = item.querySelector("h2").textContent;
    const categoryItemsCount = item.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemsCount}`);
  });
}

showCategoriesLog();
