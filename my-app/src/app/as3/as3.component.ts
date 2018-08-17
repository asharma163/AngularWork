import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-as3",
  templateUrl: "./as3.component.html",
  styleUrls: ["./as3.component.css"]
})
export class As3Component implements OnInit {
  show = false;
  log = [];
  onToggle() {
    this.show = !this.show;
    this.log.push(this.log.length + 1);
  }
  constructor() {}

  ngOnInit() {}
}
