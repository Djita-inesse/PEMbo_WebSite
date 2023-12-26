const { faker } = require("@faker-js/faker");

function generateUsers() {
  let users = [];
  for (let id = 1; id <= 8; id++) {
    users.push({
      id: id,
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      role: faker.helpers.arrayElement(["Admin", "Customer"]),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      phone_number: faker.phone.number(),
    });
  }
  return users;
}

function generateAddresses(users) {
  let addresses = [];
  users.forEach((user) => {
    addresses.push({
      id: addresses.length + 1,
      user_id: user.id,
      street: faker.commerce.user_id,
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
    });
  });
  return addresses;
}

function generateCategories() {
  let categories = [];
  for (let id = 1; id <= 8; id++) {
    categories.push({
      id: id,
      name: faker.commerce.department(),
    });
  }
  return categories;
}

function generateProducts(categories) {
  let products = [];
  for (let id = 1; id <= 8; id++) {
    products.push({
      id: id,
      category_id: faker.helpers.arrayElement(categories).id,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      stock_quantity: faker.number.int({ min: 0, max: 100 }),
      image_url: faker.image.url(),
    });
  }
  return products;
}

function generateReviews(users, products) {
  let reviews = [];
  for (let id = 1; id <= 8; id++) {
    reviews.push({
      id: id,
      product_id: faker.helpers.arrayElement(products).id,
      user_id: faker.helpers.arrayElement(users).id,
      rating: faker.number.int({ min: 1, max: 5 }),
      comment: faker.lorem.sentence(),
      date_created: faker.date.past(),
    });
  }
  return reviews;
}

function generateCarts(users) {
  let carts = [];
  users.forEach((user) => {
    carts.push({
      id: carts.length + 1,
      user_id: user.id,
    });
  });
  return carts;
}

function generateCartItems(carts, products) {
  // faker.number.int({ min: 10, max: 100 })
  let cartItems = [];
  carts.forEach((cart) => {
    for (let i = 0; i < faker.number.int({ min: 1, max: 3 }); i++) {
      // Each cart will have 1-3 items.
      cartItems.push({
        id: cartItems.length + 1,
        cart_id: cart.id,
        product_id: faker.helpers.arrayElement(products).id,
        quantity: faker.number.int({ min: 1, max: 5 }),
      });
    }
  });
  return cartItems;
}

function generateOrders(users, addresses) {
  let orders = [];
  for (let id = 1; id <= 8; id++) {
    orders.push({
      id: id,
      user_id: faker.helpers.arrayElement(users).id,
      address_id: faker.helpers.arrayElement(addresses).id,
      date_created: faker.date.past(),
      status: faker.helpers.arrayElement([
        "Processing",
        "Shipped",
        "Delivered",
      ]),
    });
  }
  return orders;
}

function generateOrderItems(orders, products) {
  let orderItems = [];
  orders.forEach((order) => {
    for (let i = 0; i < faker.number.int({ min: 1, max: 3 }); i++) {
      // Each order will have 1-3 items.
      let product = faker.helpers.arrayElement(products);
      orderItems.push({
        id: orderItems.length + 1,
        order_id: order.id,
        product_id: product.id,
        quantity: faker.number.int({ min: 1, max: 5 }),
        price_each: product.price,
      });
    }
  });
  return orderItems;
}

// Generate and combine all data
let users = generateUsers();
let categories = generateCategories();
let products = generateProducts(categories);
let addresses = generateAddresses(users);
let reviews = generateReviews(users, products);
let carts = generateCarts(users);
let cartItems = generateCartItems(carts, products);
let orders = generateOrders(users, addresses);
let orderItems = generateOrderItems(orders, products);

let data = {
  users: users,
  addresses: addresses,
  categories: categories,
  products: products,
  reviews: reviews,
  carts: carts,
  cartItems: cartItems,
  orders: orders,
  orderItems: orderItems,
};

console.log(JSON.stringify(data, null, 2));
