import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    standalone: true,
    imports: [CommonModule]
  })
  export class ModalComponent implements OnInit {
    isVisible$: Observable<boolean>;
    data$: Observable<any>;
  
    constructor(private modalService: ModalService) {
      this.isVisible$ = this.modalService.isVisible$;
      this.data$ = this.modalService.data$;
    }
  
    ngOnInit() {}
  
    closeModal() {
      this.modalService.hideModal();
    }
  }
  