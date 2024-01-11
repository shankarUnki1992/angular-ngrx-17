import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.scss'
})
export class CounterdisplayComponent {

  counter!: number;
  constructor(private store: Store<{ count: { count: number } }>) {
    store.select('count').subscribe(data => {
      this.counter = data.count;
    })
  }
}
