import './index.css';
import numeral from 'numeral';

const course = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${course} for this awesome course`);
