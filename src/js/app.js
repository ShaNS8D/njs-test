import healthStatus from './getHealthStatus';
import sortHealth from './sortHealth';

const status = {name: 'Маг', health: 90};

console.log(healthStatus(status));

const sortStatus = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

console.log(sortHealth(sortStatus));
