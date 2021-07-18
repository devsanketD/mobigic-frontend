import { Component, OnInit } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { onMainContentChange } from './animation/animations';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [onMainContentChange],
})
export class AppComponent {
  name = 'Angular';
  layout = false;
  public onSideNavChange: boolean;

  constructor(private sidenavService: SidenavService, private router: Router, private location: Location) {
    this.sidenavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    });
  }
}
