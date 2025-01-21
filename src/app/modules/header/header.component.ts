import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  ngOnInit(): void {
    
  }

  getHeadClass(): string {
    let styleClass = 'header';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass += ' header-collapsed';
    }
    if (this.screenWidth < 768) {
      styleClass += ' header-mobile';
    }
    return styleClass;
  }
}
