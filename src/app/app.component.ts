import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { formLabelModel } from './formLabelModel';
import { formModel } from './formModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sameCompoAssign';
  userDataArray: formModel[];
  vendorDataArray: formModel[];
  formDataSub: Subscription;
  viewNameC: string;
  currentViewName: formLabelModel;
  contactFormLabels: formLabelModel;
  vendorFormLabels: formLabelModel;
  tatleThs: { th1: string, th2: string, th3: string, th4: string };

  constructor(private data: DataService) { }


  ngOnInit() {
    this.userDataArray = [];
    this.vendorDataArray = [];
    this.contactFormLabels = {
      title: 'Contact Info',
      label1: 'Name',
      label2: 'Designation',
      label3: 'Experiance',
      label4: 'Hobbies',
      placeholder1: 'Enter name',
      placeholder2: 'Enter designation',
      placeholder3: 'Enter experiance',
      placeholder4: 'Enter hobbies'
    }
    this.vendorFormLabels = {
      title: 'Vendor Info',
      label1: 'Name',
      label2: 'Domain',
      label3: 'Products',
      label4: 'Address',
      placeholder1: 'Enter name',
      placeholder2: 'Enter domain',
      placeholder3: 'Enter products',
      placeholder4: 'Enter address'
    }
    this.formDataSub = this.data.formData.subscribe((data: formModel) => {
      if (this.viewNameC === 'contact') {
        this.userDataArray.unshift(data);
      } else {
        this.vendorDataArray.unshift(data);
      }
    })
  }

  loadView(viewName: string) {
    this.viewNameC = viewName;
    if (viewName === 'contact') {
      this.currentViewName = this.contactFormLabels;
      this.tatleThs = {
        th1: this.contactFormLabels.label1,
        th2: this.contactFormLabels.label2,
        th3: this.contactFormLabels.label3,
        th4: this.contactFormLabels.label4
      }
    } else {
      this.currentViewName = this.vendorFormLabels;
      this.tatleThs = {
        th1: this.vendorFormLabels.label1,
        th2: this.vendorFormLabels.label2,
        th3: this.vendorFormLabels.label3,
        th4: this.vendorFormLabels.label4
      }
    }
  }

}
