import { Component, OnInit } from '@angular/core';
import { Recipe } from '../reciepe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] =[

new Recipe('recipe1','desc1','https://live.staticflickr.com/5822/31006629172_eb7f7e9eb7_b.jpg'),

new Recipe('recipe2','desc2','https://live.staticflickr.com/5643/30102545481_54a2fdeeaa_b.jpg'),

new Recipe('recipe3','desc3','https://live.staticflickr.com/1652/25402788902_1208dcefb2_b.jpg'),

new Recipe('recipe4','desc4','https://cdn.pixabay.com/photo/2020/02/25/03/05/delight-4877830_1280.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
