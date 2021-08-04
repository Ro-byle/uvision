import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.component.html',
  styleUrls: ['./pinfo.component.css']
})
export class PinfoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  go() {
    this.router.navigate(['tabs']);
  }
}
