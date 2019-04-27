import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-houston',
  templateUrl: './houston.component.html',
  styleUrls: ['./houston.component.css']
})
export class HoustonComponent implements OnDestroy, OnInit {

  private unsubscribe = new Subject<void>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
