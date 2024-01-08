import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoginModalComponent } from '../login-modal/login-modal.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private modalService: NzModalService) {}

  openLoginModal(): void {
    const modalRef = this.modalService.create({
      nzTitle: 'Đăng nhập tài khoản',
      nzContent: LoginModalComponent,
      nzFooter: null,
    });

    modalRef.componentInstance?.showModal();
  }
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
