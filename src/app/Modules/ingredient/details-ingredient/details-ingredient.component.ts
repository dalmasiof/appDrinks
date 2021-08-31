import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-details-ingredient',
  templateUrl: './details-ingredient.component.html',
  styleUrls: ['./details-ingredient.component.css']
})
export class DetailsIngredientComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get("Id")
    alert(id);
  }

}
