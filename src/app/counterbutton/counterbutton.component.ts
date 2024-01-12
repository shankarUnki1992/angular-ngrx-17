import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncreament, decrement, increment, reset } from '../store/counter.actions';
import { CounterdisplayComponent } from '../counterdisplay/counterdisplay.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Cals {
  value: string;
}

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [CounterdisplayComponent, FormsModule, MatButtonModule, MatInputModule, MatSelectModule],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.scss'
})
export class CounterbuttonComponent {

  counterDisplay: number = 0;
  valueType: string = 'add';
  cals: Cals[] = [
    { value: 'add' },
    { value: 'minus' }
  ]
  constructor(private store: Store<{ count: { count: number } }>) {


  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  customIncreament() {
    this.store.dispatch(customIncreament({ value: this.counterDisplay, valueType: this.valueType }));
  }
}
