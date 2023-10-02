import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isVisibleMenu: boolean = true;
  iconSizes = { height: 12, width: 12 };

  toggleVisibleMenu(): void {
    this.isVisibleMenu = !this.isVisibleMenu;
  }
}
