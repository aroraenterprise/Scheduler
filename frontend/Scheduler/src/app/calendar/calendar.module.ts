import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerComponent } from './picker/picker.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PickerComponent, ConfirmationComponent]
})
export class CalendarModule { }
