import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'outputcpm',
    templateUrl: 'outputcpm.html'
})
export class OutputcpmComponent {
    //定义一个Output,并实例化EventEmitter
    @Output() outputData = new EventEmitter<any>();


    constructor() {
    }

    /**
     * 用于广播子组件数据
     */
    exeFun() {
        let childData = {
            'a': "a",
            'b': 10,
            "c": () => {
                alert("我是子组件的方法")
            }
        };
        this.outputData.emit(childData);
    }

}
