import _ from 'lodash';
import printMe from './print';
import './style.css';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack',], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
printMe();