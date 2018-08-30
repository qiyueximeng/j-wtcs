import './style/main.css';
import * as _ from 'lodash';
import * as $ from 'jquery';

$(function() {

    showName('July');
})
function showName(name: string): void {
    console.log(name);
}