import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  products = [
    {
      'name': 'Leve Market',
      'path': '/products/leve-market'
    }
  ]

  services = [
    {
      'name': 'Trade Marketing',
      'path': '/services/trade-marketing'
    },
    {
      'name': 'E-commerce',
      'path': '/services/ecommerce'
    },
    {
      'name': 'Odoo',
      'path': '/services/odoo'
    }
  ]

  rrss = [
    {
      'fa_icon': 'fa fa-instagram',
      'url': 'https://www.instagram.com/ubbe.digital'
    },
    {
      'fa_icon': 'fa fa-twitter-square',
      'url': 'https://twitter.com/ubbedigital'
    },
    {
      'fa_icon': 'fa fa-linkedin',
      'url': 'https://www.linkedin.com/company/ubbedigital'
    }
  ]
}
