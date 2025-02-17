import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'richie-iconbutton',
  templateUrl: './richie-iconbutton.component.html',
  styleUrls: ['./richie-iconbutton.component.scss']
})
export class RichieIconbuttonComponent {
  @Input() url: string;
  @Input() icon: string;
  @Input() text: string;
  @Input() tabindex: number;
  @Output() action = new EventEmitter<Event>();

  actionCalled(event?): void {
    this.action.emit(event);
  }
}
