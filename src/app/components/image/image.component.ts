import { Component, Input } from '@angular/core';

import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css' 
})
export class ImageComponent {
  @Input() image!: Image;

  onImageLoad(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.classList.add('loaded');
  }
}
