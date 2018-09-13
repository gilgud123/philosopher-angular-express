import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    this.router.events.subscribe((value => {
      this.currentUrl = router.url.toString();
      console.log(this.currentUrl);
    }));
  }

  ngOnInit() {

  }

}
