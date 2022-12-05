import { Component, OnInit, Input } from '@angular/core';
import { ModalRightComponent } from 'src/app/core-components/modal-right/modal-right.component';
import { ModalService } from 'src/app/services/modal.service';
import { Modal } from 'src/global/interfaces';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent {
  modal: Modal = {
    name: 'mobile-menu',
    hidden: true,
    id: 0,
    blockScroll: true,
  };
}
