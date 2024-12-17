import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html"
})

export class CounterComponent {
  public counter: number = 15;

  public increment(value: number): void {
    this.counter += value;
  }

  public decrement(value: number): void {
    this.counter -= value;
  }

  public reset(): void {
    this.counter = 10;
  }

}
