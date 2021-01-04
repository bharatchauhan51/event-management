import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { EventDetailService } from '../services/event-details.service';

declare var $: any;

@Component({
  selector: 'app-register-events',
  templateUrl: './register-events.component.html',
  styleUrls: ['./register-events.component.css']
})
export class RegisterEventsComponent {
  registrationForm: FormGroup;
  isSubmitted  =  false;

  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  eventDetails: any[] = [];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private eventDetailsService: EventDetailService) { }

  ngOnInit() {
    this.eventDetailsService.getAllEvents().subscribe(eventDetail => {
      this.eventDetails = eventDetail;
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

  Register(eventDetail: any) {
    console.log(eventDetail);
    this.router.navigate(['/registration', eventDetail.id]);
  }

  RegisterHere() {
    window.location.href = 'https://docs.google.com/forms/d/1yO7VdNtak6RvlLTQBScsRYHZmVbd1Crq1FMCThIF2Pc/viewform?edit_requested=true'
  }

  GetPaymentReciept() {
    window.location.href = 'https://forms.gle/g3PD7edjjX1VPfme7'
  }

  OpenMicAudienceForm() {
    window.location.href = 'https://forms.gle/rTzcNKgWtxKF3Kqw7'
  }
}
