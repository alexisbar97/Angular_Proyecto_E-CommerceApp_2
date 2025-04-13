import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery = '';
  isMenuOpen = false;

  constructor(private menuService: MenuService) {
    this.menuService.isMenuOpen$.subscribe(open => {
      this.isMenuOpen = open;
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu') && !target.closest('.sidebar-menu')) {
      this.menuService.closeMenu();
    }
  }
}
