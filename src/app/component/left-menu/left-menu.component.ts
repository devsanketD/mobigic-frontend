import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from '../../animation/animations';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState = false;
  public linkText = false;

  public pages: Page[] = [
    { name: 'Dashboard', link: 'dashboard', icon: 'insert_chart_outlined' },
  ];

  constructor(
    private sidenavService: SidenavService,
    private router: Router,
  ) {

  }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this.sidenavService.sideNavState$.next(this.sideNavState);
  }

  navigate(path) {
    this.router.navigate([path]);
  }

  Logout() {
    if(window.confirm()){
      localStorage.clear();
    this.router.navigate(['sign']);
    }
  }
}
