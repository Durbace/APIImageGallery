import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image.model';
import { ImageComponent } from "../image/image.component";
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageComponent, PaginationComponent, SharedModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  authors: string[] = [];
  private _selectedAuthor: string = '';
  currentPage: number = 1;
  imagesPerPage: number = 6;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe({
      next: (images) => {
        this.images = images;
        this.authors = [...new Set(images.map(image => image.author))];
      },
      error: (err) => console.error('Error fetching images:', err)
    });
  }

  get selectedAuthor(): string {
    return this._selectedAuthor;
  }

  set selectedAuthor(author: string) {
    this._selectedAuthor = author;
    this.currentPage = 1;
  }

  get paginatedImages(): Image[] {
    const startIndex = (this.currentPage - 1) * this.imagesPerPage;
    const endIndex = startIndex + this.imagesPerPage;
    return this.filteredImages.slice(startIndex, endIndex);
  }

  get filteredImages(): Image[] {
    return this.selectedAuthor ? this.images.filter(image => image.author === this.selectedAuthor) : this.images;
  }

  onPageChanged(newPage: number): void {
    this.currentPage = newPage;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredImages.length / this.imagesPerPage);
  }
}