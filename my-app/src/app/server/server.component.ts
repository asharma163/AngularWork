import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = "offline";
  isDisabled = false;
  serverCreationStatus = "There is no server!";
  serverName = "Test";
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server created! with name " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  ngOnInit() {}
}
