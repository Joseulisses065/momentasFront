import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MomentService} from "../../core/services/moment.service";
import {Moment} from "../../core/models/Moment";

@Component({
  selector: 'app-editar-moment',
  templateUrl: './editar-moment.component.html',
  styleUrls: ['./editar-moment.component.css']
})
export class EditarMomentComponent implements OnInit {

  moment?: Moment;
  btnText:string = "Editar";

  constructor(private route: ActivatedRoute, private momentaService:MomentService) {
  }

  ngOnInit() {
    this.detalhar();
  }
  detalhar(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.momentaService.findById(id).subscribe(res=>{
      this.moment = res;
    })
  }
}
