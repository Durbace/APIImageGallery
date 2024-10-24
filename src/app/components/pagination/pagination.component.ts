import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() pageChanged = new EventEmitter<number>();

  changePage(page: number): void {
    this.pageChanged.emit(page);
  }

  get paginationArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }
}
