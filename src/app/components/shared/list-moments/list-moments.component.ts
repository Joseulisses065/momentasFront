import {Component, OnInit} from '@angular/core';
import {MomentService} from "../../../core/services/moment.service";
import {Moment} from "../../../core/models/Moment";

@Component({
  selector: 'app-list-moments',
  templateUrl: './list-moments.component.html',
  styleUrls: ['./list-moments.component.css']
})
export class ListMomentsComponent implements OnInit {
  public moments!:Moment[];
  constructor(private momentService:MomentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.momentService.findAll().subscribe(res=>{
      this.moments=res;
    })
  }


}
