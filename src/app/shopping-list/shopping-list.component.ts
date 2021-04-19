import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]= [

    new Ingredient('ingredient1',25),

    new Ingredient('ingredient2' , 30)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
