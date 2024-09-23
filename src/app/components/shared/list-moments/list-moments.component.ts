import {Component, Input, OnInit} from '@angular/core';
import {MomentService} from "../../../core/services/moment.service";
import {Moment} from "../../../core/models/Moment";

@Component({
  selector: 'app-list-moments',
  templateUrl: './list-moments.component.html',
  styleUrls: ['./list-moments.component.css']
})
export class ListMomentsComponent implements OnInit {
  public moments:Moment[] = [];
  public searchMoments:Moment[]=[];
  @Input() searchText!:string;
  constructor(private momentService:MomentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnChanges(): void {
    this.searchMoments = this.moments.filter((x)=>{
     return  x.title.toLowerCase().includes(this.searchText.toLowerCase());
    })
  }

  getAll(){
    this.momentService.findAll().subscribe(res=>{
      this.moments=res;
      this.searchMoments = res;
    })
  }


}
