//question2
function getFirstNDishNames(orders, no) {
  return (last = orders
    .slice(0, no)
    .map((x) => x.dishName)
    .join(","));
}
console.log(getFirstNDishNames(orders, 3));
//question 3
function mergeOrders(orders, moreOrders) {
  return moreOrders ? (neworders = [...orders, ...moreOrders]) : orders;
}
console.log(mergeOrders(orders, moreOrders));
console.log(mergeOrders(orders));

//question7
//refactoring1
function getOrderDetails(o) {
  const {
    dish: { name: dishName, category: dishCategory },
    quantity: orderQuantity,
    price: orderPrice,
  } = o;

  return `${dishName} (${dishCategory}) x${orderQuantity} costs $${orderPrice}`;
}
console.log(getOrderDetails(order));
//refactoring2
const getOrderDetails = ({
  dish: { name: dishName, category: dishCategory },
  quantity: orderQuantity,
  price: orderPrice,
}) => `${dishName} (${dishCategory}) x${orderQuantity} costs $${orderPrice}`;

console.log(getOrderDetails(order));
//question6
function getTotalRatingsForChefs(orders) {
  const rate = orders.map((orders) => {
    orders.reduce((acc, curr) => {
      acc[orders.chef] = curr.ratings.length;
      return acc;
      acc;
    }, {});
  });
}
console.log(getTotalRatingsForChefs(orders));
//question1
function getHighRatedDishes() {
  const dishes = orders
    .filter((orders) => orders.ratings.every((n) => n.ratings) < 4)
    .map((dishname) => dishname.dishName);
  return dishes.join(", ");
}
