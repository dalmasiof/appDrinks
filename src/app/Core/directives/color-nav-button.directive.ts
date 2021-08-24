import { Directive, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[appColorNavButton]'
})
export class ColorNavButtonDirective {

  constructor(private el: ElementRef, private router:Router) { 
    debugger
    router.events.subscribe((x)=>{
      
      alert(x)
    })
  } 


}
