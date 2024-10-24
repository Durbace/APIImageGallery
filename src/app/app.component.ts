import { Component } from '@angular/core';

import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [GalleryComponent]
})
export class AppComponent {
  title = 'image-gallery';
}
