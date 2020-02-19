var faker = require('faker');
const createFakeInfo = () => ({
  title: faker.commerce.productName(),
  images: faker.image.image(),
})
          exports.seed = async function(knex, Promise) {
            const fakeUsers = [];
            const desiredFakeUsers =1001;
            
            var recurs = function(numy = 0) {
              for(let i = 0; i<desiredFakeUsers; i++) {
                fakeUsers.push(createFakeInfo());
              }
              numy++;
              if(numy < 3)
              return recurs(numy)
            }
              await knex("users")
              .insert(fakeUsers)
}