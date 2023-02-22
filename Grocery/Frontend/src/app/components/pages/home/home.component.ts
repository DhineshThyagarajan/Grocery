import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { GroceryService } from 'src/app/services/grocery.service';
import { grocery } from 'src/app/shared/models/grocery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  groceries:grocery[] = [];

  constructor(private groceryService:GroceryService, activatedRoute:ActivatedRoute) {
     let groceryObservable:Observable<grocery[]>
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
      groceryObservable = this.groceryService.getAllGroceryBySearhTerm(params.searchTerm);
      else if(params.tag)
      groceryObservable = this.groceryService.getAllGroceryByTag(params.tag);
      else
      groceryObservable = groceryService.getAll();

      groceryObservable.subscribe((serverGrocery) =>{
        this.groceries=serverGrocery;
      })
    })

  }
  ngOnInit(): void {}
}
