
// exports.seed = function(knex) {
//   return knex('table_name').del()
//     .then(function () {
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

// in order to see the database I will need faker
  // so something like 

  const faker = requre("faker");

  const createFakeInfo = () => ({
    title: faker.commerce.productName(),
    images: faker.image.image(),
  })

  exports.seed = async function(knex, Promise){

  };