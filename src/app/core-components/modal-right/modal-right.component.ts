import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Modal } from 'src/global/interfaces';

@Component({
  selector: 'app-modal-right',
  templateUrl: './modal-right.component.html',
  styleUrls: ['./modal-right.component.scss'],
})
export class ModalRightComponent implements OnInit {
  @Input() modalData = {} as Modal;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalInit(this.modalData);
  }

  get isHidden() {
    return this.modalService.getModal(this.modalData.name)?.hidden;
  }
}
