import _ from 'lodash'

import { name,a } from './content/myclass';
import Greeter from './content/greeter';

import './style/test.css';


const arr = _.concat([1, 2], 3, 4, [5]);
console.log(arr);

console.log('hello' + name);

a.sayHi()


const g = new Greeter('ss');
g.greet()


console.log(123)