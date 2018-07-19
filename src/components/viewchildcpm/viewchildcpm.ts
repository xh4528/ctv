import {Component} from '@angular/core';

@Component({
    selector: 'viewchildcpm',
    templateUrl: 'viewchildcpm.html'
})
export class ViewchildcpmComponent {

    text: string;

    constructor() {
        console.log('Hello ViewchildcpmComponent Component');
        this.text = '我是viewchildcpm子组件的数据';
    }


    doFunc() {
        alert('我是子组件的方法');
    }

}
