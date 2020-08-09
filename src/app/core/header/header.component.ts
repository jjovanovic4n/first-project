import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mov-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {

    window.addEventListener("scroll", this.scrollNavFunc);
  }

  scrollNavFunc () {
   let  classID = document.getElementById("navbar-secondary");
        let y = window.scrollY;
        if (y >= 750) {
          classID.className = "bottomMenu show"
        } else {
          classID.className = "bottomMenu hide"
        }
      }
  
}
