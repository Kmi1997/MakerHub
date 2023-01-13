import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { InternshipService } from 'src/app/shared/services/internship.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  currentParams : string = "";
  title : string = "";

  constructor(private router : ActivatedRoute, private service : InternshipService) { }

  ngOnInit(): void {
    //get url params to send to API.
    this.router.params.subscribe((params : any) => {
      this.currentParams = params.id;
      console.log(this.currentParams);
      
    });

    this.service.getOne(this.currentParams).subscribe((data : []) => {
      console.log(data)
    });
  };
};
