import style from './index.module.scss';
import './index.scss';
import './assets/images/dog.jpg';
// ДОБАВЛЕНО ПО ЗАДАНИЮ: импорт SVG как React-компонента
import { ReactComponent as ReactLogo } from './assets/images/react.svg'; 

const numbers = Array.of(2, 3, 5);

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10 
console.log(style);
console.log(ReactLogo); // Выводим в консоль, чтобы задействовать переменную