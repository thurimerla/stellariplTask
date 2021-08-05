import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { formLabelModel } from '../formLabelModel';
import { formModel } from '../formModel';
import $ from 'jquery';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formLabelData: formLabelModel;

  form: formModel;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.form = {
      name: '',
      designation: '',
      experience: '',
      hobbies: ''
    }
  }

  saveData(fData: formModel) {
    this.data.formData.next(fData);
    this.resetData();
  }

  resetData() {
    this.form = {
      name: '',
      designation: '',
      experience: '',
      hobbies: ''
    }
  }

}
