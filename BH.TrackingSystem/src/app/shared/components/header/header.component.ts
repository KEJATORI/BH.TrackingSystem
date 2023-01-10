import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, share, Subscription, timer } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  breadcrumbs$!: Observable<any[]>;

  constructor(private bcService: BreadcrumbService) {}

  time = new Date();
  intervalId!: any;

  ngOnInit() {
    this.breadcrumbs$ = this.bcService.breadcrumbs$;

    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
