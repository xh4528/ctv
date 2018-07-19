import {NgModule} from '@angular/core';
import {InputcpmComponent} from './inputcpm/inputcpm';
import { OutputcpmComponent } from './outputcpm/outputcpm';
import { ViewchildcpmComponent } from './viewchildcpm/viewchildcpm';

@NgModule({
    declarations: [InputcpmComponent,
    OutputcpmComponent,
    ViewchildcpmComponent],
    imports: [],
    exports: [InputcpmComponent,
    OutputcpmComponent,
    ViewchildcpmComponent]
})
export class ComponentsModule {
}
