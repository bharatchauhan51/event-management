import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { map } from 'rxjs/operators';
import { EventDetailService } from '../services/event-details.service';

declare var $: any;

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  eventName: string;
  eventId: number;
  eventDetail: any = {};
  isSubmitted  =  false;

  SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventDetailService: EventDetailService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.eventId = +params['eventId'];
    });

    this.eventDetailService.getEventById(this.eventId).subscribe(event => {
      console.log(event);
      this.eventDetail = event[0];
      this.eventDetail.name = this.eventDetail.name[0].toUpperCase() + this.eventDetail.name.slice(1).toLowerCase();
    });

    this.registrationForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: [undefined, [Validators.required]],
      category: ['', Validators.required],
      agreeTerms: [false, Validators.required]
    });
  }

  register(){
    console.log("VALID:::", this.registrationForm.valid);
    console.log(this.registrationForm.value);
    this.isSubmitted = true;
    if(this.registrationForm.invalid){
      return;
    }
  }

  resetRegisterForm() {
    this.registrationForm.reset();
  }

  navigateBack(): void {
    this.router.navigate(['/registration']);
}
}
