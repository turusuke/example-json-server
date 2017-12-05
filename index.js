const faker = require('faker');

faker.locale = 'ja';

module.exports = () => {

  return (new Array(10).fill(0)).reduce((data) => {
    data.members.push({
      id: faker.random.uuid(),
      name: `${faker.name.lastName()}${faker.name.firstName()}`,
      avatar: faker.image.avatar(),
      city: faker.address.city(),
      memberType: Math.random() * 3 + 1 >> 0,
      lastUpdated: faker.date.between('1988-01-01', '2001-12-31')
    });
    return data
  }, {members: []})
};