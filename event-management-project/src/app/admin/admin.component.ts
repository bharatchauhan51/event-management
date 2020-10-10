import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

declare var $: any;

$(document).ready(function () {
  $('.leftmenutrigger').on('click', function (event) {
    $('.side-nav').toggleClass("open");
    event.preventDefault();
  });
});

$(document).ready(function () {
  $('.nav-link').on('click', function (event) {
    $('.side-nav').removeClass("open");
    event.preventDefault();
  });
});

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(public router: Router) { }

  ngOnInit() { }
}
