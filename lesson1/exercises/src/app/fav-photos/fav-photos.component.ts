import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "PHOTOS!";
  image1 =
    "https://summitsports.scene7.com/is/image/SummitSports/571747_571755_1?$600$";
  image2 =
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ddba44b6-bf0f-4362-b0be-20c68161f8eb/air-jordan-1-pollen-release-date.jpg";
  image3 =
    "https://images.immediate.co.uk/production/volatile/sites/21/2020/04/Sentinel-full-bike-7c2bc57.jpg?quality=90&resize=620,413";

  constructor() {}

  ngOnInit() {}
}
