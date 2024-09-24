import {Component, OnInit} from '@angular/core';
import {MomentService} from "../../core/services/moment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Moment} from "../../core/models/Moment";
import {MessageService} from "../../core/services/message.service";

@Component({
  selector: 'app-moment-details',
  templateUrl: './moment-details.component.html',
  styleUrls: ['./moment-details.component.css']
})
export class MomentDetailsComponent implements OnInit {
  moment?: Moment;

  constructor(private momentService: MomentService, private route: ActivatedRoute, private router: Router,private messages:MessageService) {
  }

  ngOnInit(): void {
    this.findById()
  }

  async  findById() {
    const id: string | null = this.route.snapshot.paramMap.get("id");
    await this.momentService.findById(Number(id)).subscribe(res => {
      this.moment = res;
    })
  }

  async  remover(id: number) {
    await this.momentService.delete(id).subscribe();
    this.messages.add("Momento removido com successo")
    this.router.navigate(['/']);
  }
}
