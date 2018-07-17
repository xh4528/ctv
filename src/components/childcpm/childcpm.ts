import {Component, Input} from '@angular/core';

/**
 * Generated class for the ChildcpmComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'childcpm',
    templateUrl: 'childcpm.html'
})
export class ChildcpmComponent {
    /**
     * 两种方式定义Input
     * inputData:子组件接收数据属性名
     */

            //1:属性名和内部变量名分别设置
            // @Input('inputData') internalData: any;

            //2:属性名和变量名一致
    @Input() inputData: any;


    @Input() inputFunc: Function;

    constructor() {
    }

    /**
     * 获取父组件的数据
     */
    getDate() {
        alert("我是子组件,父组件传递过来了:" + JSON.stringify(this.inputData));
    }

    /**
     * 执行父组件的方法
     */
    exeFunc() {
        let val = {
            "a": 'a',
            "b": 10,
            "c": () => {
                alert("我是子组件的方法")
            }
        };
        this.inputFunc(val);
    }
}
