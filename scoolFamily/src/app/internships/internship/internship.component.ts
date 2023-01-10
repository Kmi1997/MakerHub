
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { InternshipService } from "src/app/shared/services/internship.service";

@Component({
  selector: "app-internship",
  templateUrl: "./internship.component.html",
  styleUrls: ["./internship.component.scss"],
})

export class InternshipComponent implements OnInit {

  constructor(private intShipService: InternshipService) { }


  internship!: {
    name: string,
    numberAvaible: number,
    duration: number,
    startDate: Date,
    endDate: Date,
    theme: string | null,
    deleted: boolean,
    image: string | null,
    price: number,
    place: string,
    fromAge: number | null,
    desc: string | null
  }[];

  ngOnInit() {
    this.intShipService.getData().subscribe((x: []) => {
      this.internship = x;
      console.log(this.internship);
    });
    
  }
}


