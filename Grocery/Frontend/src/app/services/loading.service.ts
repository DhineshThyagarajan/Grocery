import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject= new BehaviorSubject<boolean>(false);
  constructor() { }
  showLoading(){
    this.isLoadingSubject.next(true);
  }
  hideLoading(){
     var that = this;
    setTimeout(function() {
      that.isLoadingSubject.next(false);

    }.bind(this), 500);

  }
  get isLoading(){
    return this.isLoadingSubject.asObservable();
  }

}
