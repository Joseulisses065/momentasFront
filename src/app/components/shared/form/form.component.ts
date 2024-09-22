import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Moment} from "../../../core/models/Moment";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MomentService} from "../../../core/services/moment.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() public moment!: Moment;
  @Input() public btnText!: string;
  momentForm!: FormGroup;


  constructor(private service: MomentService) {
  }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    })
  }

  get title() {
    return this.momentForm.get('title');
  }

  get description() {
    return this.momentForm.get('description');
  }

  get image() {
    return this.momentForm.get('image');
  }


  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.momentForm.value);
  }
}
