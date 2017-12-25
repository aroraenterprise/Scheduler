import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerComponent } from './picker/picker.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { routing } from './calendar.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PickerComponent, ConfirmationComponent]
})
export class CalendarModule { }
