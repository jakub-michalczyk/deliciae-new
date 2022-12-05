import { DOCUMENT } from '@angular/common';
import { Injectable, Renderer2 } from '@angular/core';
import { ɵDomRendererFactory2 } from '@angular/platform-browser';
import { Modal } from 'src/global/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modals: Modal[] = [];
  openedModals: Modal[] = [];
  private renderer = {} as Renderer2;

  constructor(rendererFactory: ɵDomRendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  modalInit(modal: Modal) {
    let newModal = {
      name: modal.name,
      hidden: modal.hidden,
      id: this.modals.length,
      blockScroll: modal.blockScroll,
    } as Modal;
    this.registerModal(newModal);
  }

  registerModal(modal: Modal) {
    if (!this.modals.includes(modal)) {
      this.modals.push(modal);
    }
  }

  modalToggle(modalName: string) {
    let modalObj = this.modals.find(
      (registeredModal) => registeredModal.name === modalName
    );

    if (!!modalObj) {
      this.modals[modalObj.id].hidden = !this.modals[modalObj.id].hidden;
    }

    if (modalObj?.blockScroll) {
      this.scrollToggle();
    }
  }

  getModal(name: string) {
    return this.modals.find((registeredModal) => registeredModal.name === name);
  }

  scrollToggle() {
    !document.body.classList.contains('block-scroll')
      ? this.renderer.addClass(document.body, 'block-scroll')
      : this.renderer.removeClass(document.body, 'block-scroll');
  }
}
