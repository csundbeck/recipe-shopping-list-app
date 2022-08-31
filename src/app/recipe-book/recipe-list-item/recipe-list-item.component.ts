import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {
  recipes: Recipe[]
  @Input() index: number

  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
      }
    }
