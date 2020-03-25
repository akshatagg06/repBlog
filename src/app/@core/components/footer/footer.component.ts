import { SharedElement } from './../../interfaces/shared-element.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  sharedElements: SharedElement[] = [
    {
      url: 'https://twitter.com',
      path: '/',
      icon: 'fab fa-twitter'
    },
    {
      url: 'https://github.com/',
      path: '/',
      icon: 'fab fa-github'
    },
    {
      url: 'https://www.linkedin.com/in',
      path: '/',
      icon: 'fab fa-linkedin'
    },
    {
      url: 'https://npmjs.com',
      path: '/',
      icon: 'fab fa-npm'
    }
  ];
}


