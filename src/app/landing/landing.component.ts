import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  technologies = [
    {
      src: 'assets/img/icons/technologies/python_512.png',
      label: 'Python',
      style: 'width: 70px;'
    },
    {
      src: 'assets/img/icons/technologies/js_512.png',
      label: 'JavaScript',
      style: 'width: 70px;'
    },
    {
      src: 'assets/img/icons/technologies/odoo_512.png',
      label: 'Odoo',
      style: 'width: 70px;'
    },
    {
      src: 'assets/img/icons/technologies/fastapi_logo.svg',
      label: 'FastAPI',
      style: 'width: 70px; padding: 3px;'
    },
    {
      src: 'assets/img/icons/technologies/angular_512.png',
      label: 'Angular',
      style: 'width: 70px;'
    },    {
      src: 'assets/img/icons/technologies/docker_512.png',
      label: 'Docker',
      style: 'width: 70px;'
    },    {
      src: 'assets/img/icons/technologies/ubuntu_512.png',
      label: 'Ubuntu',
      style: 'width: 70px;'
    },
    {
      src: 'assets/img/icons/technologies/android_512.png',
      label: 'Android',
      style: 'width: 70px;'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
