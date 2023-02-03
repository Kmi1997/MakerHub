import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { InternService } from 'src/app/shared/services/intern.service';
import { InternshipService } from 'src/app/shared/services/internship.service';
import { RegexPhone, regexPhoneValidator } from 'src/app/shared/validators/phoneNumber.validator';
import { Intern } from '../Intern.interface';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  currentParams: string = "";
  title: string = "";
  age: number = 0;
  checkBoxValue: boolean = false;
  registrationOk: string | null = null;

  constructor(
    private router: ActivatedRoute,
    private service: InternshipService,
    private builder: FormBuilder,
    private internService: InternService
  ) { }

  internFormValues!: Intern;

  //generate form
  generateMyForm(builder: FormBuilder): FormGroup {
    return builder.group({
      parentName: ["", {
        validators: [Validators.required]
      }],

      mail: ["", {
        validators: [Validators.email, Validators.required]
      }],

      childName: ["", {
        validators: [Validators.required]
      }],

      age: ["", {
        validators: [Validators.required]
      }],

      parentPhone: ["", {
        validators: [Validators.required, regexPhoneValidator(RegexPhone.reg)]
      }],

      healthIssues: ["", {
        validators: []
      }]
    },
      {
        validators: "",
        updateOn: "blur"
      });
  };


  myInternForm: FormGroup = this.generateMyForm(this.builder);

  ngOnInit(): void {

    //get url params to send to API.
    this.router.params.subscribe((params: any) => {
      this.currentParams = params.id;
    });

    this.service.getOne(this.currentParams).subscribe((data: { name: string, fromAge: number; }) => {
      this.title = data.name;
      this.age = data.fromAge;
    });
  };

  checkBox() {
    this.checkBoxValue = !this.checkBoxValue;
  };

  //send data + reset form group
  sendForm() {

    this.internFormValues = this.myInternForm.value;
    this.internFormValues.internshipId = parseInt(this.currentParams);
    this.internFormValues.imgRight = this.checkBoxValue;
    this.internFormValues.paid = false;
    this.internFormValues.deleted = false;

    this.internService.addIntern(this.internFormValues).subscribe((obj: { message: string; }) => {
      this.registrationOk = obj.message;
    });

    this.myInternForm.reset();
  };
};
