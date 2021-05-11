import { WorkerModel } from './../../utils/models';
import { WorkersService } from './../../services/workers.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponseModel } from '../../utils/models';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  workers: WorkerModel[];
  config: any[] = [
    { key: 'name' },
    { key: 'phone' },
    { type: 'button', text:'more' }
  ]

  constructor(
    private workersService: WorkersService
  ) { }

  ngOnInit(): void {
    this.workersService.fetch().subscribe((resp: HttpResponseModel) => {
      this.workers = resp.data;
    })
  }

}
