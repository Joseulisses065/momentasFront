import {Component, EventEmitter, Output} from '@angular/core';
import {Moment} from "../../core/models/Moment";
import {FormGroup} from "@angular/forms";
import {MomentService} from "../../core/services/moment.service";
import {Route, Router} from "@angular/router";
import {MessageService} from "../../core/services/message.service";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  constructor(private service:MomentService,private message:MessageService,private router:Router) {
  }

  btnText:string = "Salvar";


  async createHandler(event: Moment) {
    //enviar para o service
    await this.service.create(event).subscribe();
    //exibir mensagem
    this.message.add("Momento salvo");

    //redirecionar*/
    this.router.navigate(["/"]);

  }
}
