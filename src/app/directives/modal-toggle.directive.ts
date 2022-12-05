import { Directive, HostListener, Input } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Directive({
  selector: '[modalToggle]',
})
export class ModalToggleDirective {
  @Input() modalToggle = '';

  constructor(private modalService: ModalService) {}

  @HostListener('change') onChange() {
    this.toggle();
  }

  @HostListener('click') OnClick() {
    this.toggle();
  }

  toggle() {
    this.modalService.modalToggle(this.modalToggle);
  }
}
