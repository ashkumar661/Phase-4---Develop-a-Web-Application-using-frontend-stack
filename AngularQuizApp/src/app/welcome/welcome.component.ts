import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  exform: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required)
    })
  }

  startQuiz() {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }

}
