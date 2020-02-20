var faker = require('faker');
const createFakeInfo = () => ({
  title: faker.commerce.productName(),
  images: faker.image.image(),
})
exports.seed = async function (knex, Promise) {
  let fakeUsers = []
  for (let j = 0; j < 12000000; j++) {
    fakeUsers.push(createFakeInfo())
    if (j % 10000 === 0) {
      await knex("users").insert(fakeUsers);
      fakeUsers = []
    }
  }
}