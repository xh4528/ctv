import {Component, Input} from '@angular/core';

@Component({
    selector: 'inputcpm',
    templateUrl: 'inputcpm.html'
})
export class InputcpmComponent {
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
     * 执行父组件的方法,并传递参数(父组件无法保存传递过去的值,因为子组件调用父组件的方法时,里面的this是子组件)
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
