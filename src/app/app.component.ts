import { Component, VERSION } from '@angular/core';
import { interval, map, take, combineAll } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  source$ = interval(1000).pipe(take(2));
  combineAllObj$ = this.source$.pipe(
    map((val) =>
      interval(1000).pipe(
        map((i) => `Result (${val}): ${i}`),
        take(3)
      )
    )
  );
  ngOnInit(): void {
    // this.source$.subscribe(console.log);
    this.combineAllObj$.pipe(combineAll()).subscribe(console.log);
  }
}
