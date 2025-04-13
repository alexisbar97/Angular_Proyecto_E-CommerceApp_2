import { Component, HostListener } from '@angular/core';
import { MenuService } from '../shared/menu.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Category {
  name: string;
  subcategories: string[];
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuOpen = false;
  activeSubmenu: number | null = null;

  categories: Category[] = [
    {
      name: 'Categoría 1',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
    {
      name: 'Categoría 2',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
    {
      name: 'Categoría 3',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
    {
      name: 'Categoría 4',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
    {
      name: 'Categoría 5',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
    {
      name: 'Categoría 6',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
    {
      name: 'Categoría 7',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
    {
      name: 'Categoría 8',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
    {
      name: 'Categoría 9',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
    {
      name: 'Categoría 10',
      subcategories: ['SubCategoría 1', 'SubCategoría 2', 'SubCategoría 3', 'SubCategoría 4']
    },
  ];

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    this.menuService.isMenuOpen$.subscribe(open => {
      this.isMenuOpen = open;
      const pageContent = document.querySelector('.page-content');
      if (pageContent) {
        pageContent.classList.toggle('menu-open', open);
      }
    });
  }

  showSubmenu(index: number): void {
    this.activeSubmenu = index;
  }

  hideSubmenu(): void {
    this.activeSubmenu = null;
  }

  navigateToSubcategory(subcategory: string): void {
    this.hideSubmenu();
    this.menuService.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.sidebar-menu') && !target.closest('.menu-toggle')) {
      this.hideSubmenu();
    }
  }
}
