import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // no me acordaba de routerLinkActive...
  //@ViewChild("home") home!:ElementRef<HTMLInputElement>;
  //@ViewChild("ships") ships!:ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {

  }

  /*
  goToHome(){
    this.home.nativeElement.classList.add("header__page__button--active");
    this.ships.nativeElement.classList.remove("header__page__button--active");
  }

  goToShips(){
    this.home.nativeElement.classList.remove("header__page__button--active");
    this.ships.nativeElement.classList.add("header__page__button--active");
  }
  */

}
