import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild("home") home!:ElementRef<HTMLInputElement>;
  @ViewChild("ships") ships!:ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActive( ) {
    if (!this.home.nativeElement.classList.contains("header__page__button--active")){
      //this.home.nativeElement.classList.toggle("header__page__button--active");
      this.home.nativeElement.classList.add("header__page__button--active");
      this.ships.nativeElement.classList.remove("header__page__button--active");
    } else {
      this.home.nativeElement.classList.remove("header__page__button--active");
      this.ships.nativeElement.classList.add("header__page__button--active");
    }
  }

}
