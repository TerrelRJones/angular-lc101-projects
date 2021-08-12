import { Component, OnInit } from "@angular/core";

@Component({
  selector: "page-title",
  templateUrl: "./app-page-title.component.html",
  styleUrls: ["./app-page-title.component.css"],
})
export class AppPageTitleComponent implements OnInit {
  title = "YESSIR";
  constructor() {}

  ngOnInit() {}
}
