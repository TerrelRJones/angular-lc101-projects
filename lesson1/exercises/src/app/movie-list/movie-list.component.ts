import { Component, OnInit } from "@angular/core";

@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
  movies = ["Friday", "The Manchurian Candidate", "Oceans 8", "Ant-Man"];

  constructor() {}

  ngOnInit() {}
}
