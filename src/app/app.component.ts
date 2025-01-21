import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl:`./app.component.html`,
  standalone: false,
  styles: []
})
export class AppComponent {
  title = 'ASM-Intern';
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth
    this.isSideNavCollapsed = data.collapsed
  }
}
