import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GROCERY_BY_ID_URL, GROCERY_BY_SEARCH_URL, GROCERY_BY_TAG_URL, GROCERY_TAGS_URL, GROCERY_URL } from '../shared/constants/url';
import { grocery } from '../shared/models/grocery';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor( private http:HttpClient) { }

  getAll():Observable<grocery[]>{
     return this.http.get<grocery[]>(GROCERY_URL)
  }
  getAllGroceryBySearhTerm(searchTerm:string)
  {
    return this.http.get<grocery[]>(GROCERY_BY_SEARCH_URL+ searchTerm)
  }
  getAllTags(): Observable<Tag[]>
  {
    return this.http.get<Tag[]>(GROCERY_TAGS_URL)
  }
  getAllGroceryByTag(tag:string):Observable<grocery[]>{
    return  tag === "All"?
     this.getAll():
     this.http.get<grocery[]>(GROCERY_BY_TAG_URL+ tag);
  }
  getGroceryById(groceryId:string):Observable<grocery>{
    return this.http.get<grocery>(GROCERY_BY_ID_URL+groceryId);
  }
}
