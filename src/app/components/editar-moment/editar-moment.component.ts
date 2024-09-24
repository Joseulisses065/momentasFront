import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MomentService} from "../../core/services/moment.service";
import {Moment} from "../../core/models/Moment";
import {MessageService} from "../../core/services/message.service";

@Component({
  selector: 'app-editar-moment',
  templateUrl: './editar-moment.component.html',
  styleUrls: ['./editar-moment.component.css']
})
export class EditarMomentComponent implements OnInit {

  moment?: Moment;
  btnText:string = "Editar";

  constructor(private route: ActivatedRoute, private momentaService:MomentService,private router:Router,public message:MessageService) {
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

  update(moment: Moment) {
    this.momentaService.update(moment.id,moment)
    console.log(moment)
    this.message.add(`Momento ${moment.id} editado com sucesso!`)
    this.router.navigate(['/'])

  }
}
