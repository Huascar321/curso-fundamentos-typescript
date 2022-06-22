import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'james',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'costumer'
  }
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);