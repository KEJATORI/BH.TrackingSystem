import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isHidden = false;
  windowSize = window.innerWidth;

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener("window:resize")
  onResize(){
    this.windowSize = window.innerWidth;
    (this.windowSize <= 1200) ? this.isHidden = true : 0;
  }

  onToggleSidebar(){
    (this.windowSize !< 1200) ?  this.isHidden = true : this.isHidden = !this.isHidden;
  }
}
