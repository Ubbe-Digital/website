import { Component } from '@angular/core';

@Component({
  selector: 'back-scrolling',
  templateUrl: './back-scrolling.component.html',
  styleUrls: ['./back-scrolling.component.scss']
})
export class BackScrollingComponent {
  scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
}
