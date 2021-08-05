import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { formModel } from './formModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  formData = new Subject<formModel>()
  constructor() { }
}
