
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { InternshipService } from "src/app/shared/services/internship.service";
import { Internship } from "../Internship.interface";

@Component({
  selector: "app-internship",
  templateUrl: "./internship.component.html",
  styleUrls: ["./internship.component.scss"],

  // Angular animations for cards.
  animations: [
    trigger('Grow', [
      state('inactive', style({
        opacity: '100'
      })),
      state('active', style({
        opacity: '0'
      })),
      transition('inactive => active', animate('0ms')),
      transition('active => inactive', animate('300ms'))
    ]),
    trigger('Hover', [
      state('inactive', style({
        opacity: '100'
      })),
      state('active', style({
        opacity: 0.5
      })),
      transition('inactive => active', animate('0ms')),
      transition('active => inactive', animate('300ms'))
    ])
  ]
})

export class InternshipComponent implements OnInit {
 

  constructor(private intShipService: InternshipService) { }

  //index for change DIV
  index : number = 0;
  playAnimation : boolean = false;
  selectedCard: boolean = false;
  nameInternship : string = "";
  sectionActive : boolean = true;


  internship!: Internship[];

  ngOnInit() {

    //get datas to interface
    this.intShipService.getData().subscribe((x: []) => {
      this.internship = x;
      console.log(this.internship);
    });
  };

  //function to change div
  changeDivForward() : void {

    if(this.index == this.internship.length - 1){
      this.index = 0;
    }
    else{
      this.index++;
    };

    //To show the next div
    this.playAnimation = !this.playAnimation;
    setTimeout(() => {
      this.playAnimation = !this.playAnimation;
    }, 100);
  };

  changeDivBack() : void {

    if(this.index == 0){
      this.index = this.internship.length - 1;
    }
    else{
      this.index--;
    };

    this.playAnimation = !this.playAnimation;
    setTimeout(() => {
      this.playAnimation = !this.playAnimation;
    }, 100);
  };

  selected(){
    this.selectedCard = !this.selectedCard;
  };
};


