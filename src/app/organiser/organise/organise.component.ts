import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateService } from 'src/app/shared/date.service';

@Component({
  selector: 'app-organise',
  templateUrl: './organise.component.html',
  styleUrls: ['./organise.component.scss']
})
export class OrganiseComponent implements OnInit {

  form: FormGroup;

  constructor(public dateService: DateService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  submit() {
    const {title} = this.form.value;
  }

}
