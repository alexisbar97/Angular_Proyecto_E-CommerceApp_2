import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  isMenuOpen = false;

  constructor(private menuService: MenuService) {
    this.menuService.isMenuOpen$.subscribe(open => {
      this.isMenuOpen = open;
    });
  }
}
