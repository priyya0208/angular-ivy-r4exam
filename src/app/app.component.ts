import { Component, VERSION } from '@angular/core';
import { interval, map, take, combineAll, concat, of } from 'rxjs';

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
  concat$ = concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9));
  ngOnInit(): void {
    // this.source$.subscribe(console.log);
    // this.combineAllObj$.pipe(combineAll()).subscribe(console.log);
    this.concat$.subscribe(console.log);
  }
}
