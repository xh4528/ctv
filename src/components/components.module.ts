import {NgModule} from '@angular/core';
import {InputcpmComponent} from './inputcpm/inputcpm';
import { OutputcpmComponent } from './outputcpm/outputcpm';

@NgModule({
    declarations: [InputcpmComponent,
    OutputcpmComponent],
    imports: [],
    exports: [InputcpmComponent,
    OutputcpmComponent]
})
export class ComponentsModule {
}
