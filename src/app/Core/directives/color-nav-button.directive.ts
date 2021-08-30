import { Directive, ElementRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

@Directive({
  selector: '[appColorNavButton]'
})
export class ColorNavButtonDirective {

  private ActiveClassName:string="activatedButton"

  constructor(private router: Router) {
    this.router.events.subscribe ((x) => {
      try {
        if (x instanceof NavigationEnd) {
          let arrayUrl = x.url.split('/');
          this.activateButton(arrayUrl[1])
        }


      } catch (error) {
        console.error(error)
      }

    })    
  }

  private async activateButton(url: string) {
    this.inactiveButton();
    let element = document.getElementById(url)
    if (element != null) {
      element.classList.add(this.ActiveClassName)
    }
  }

  private async inactiveButton() {
    // debugger
    let elements = document.getElementsByClassName(this.ActiveClassName)
    if (elements.length > 0)
      for (var i in elements) {
        elements[i].classList.remove(this.ActiveClassName)
        break;
      }


  }


}
