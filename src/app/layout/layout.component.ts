import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { onMainContentChange } from '../animation/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [onMainContentChange],
})
export class LayoutComponent implements OnInit {

  public onSideNavChange: boolean;
  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.sideNavState$.subscribe(res => {
      // console.log(res)
      this.onSideNavChange = res;
    });
  }

}
