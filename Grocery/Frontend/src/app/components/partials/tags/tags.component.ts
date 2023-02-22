import { Component, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/services/grocery.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?:Tag[];
  constructor(groceryService: GroceryService)
  {
    groceryService.getAllTags().subscribe(serverTags =>{
      this.tags=serverTags;
    });
  }
ngOnInit(): void{

}
}
