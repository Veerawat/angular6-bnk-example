import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../models/feed';
import { BnkService } from '../../service/bnk.service';

@Component({
  selector: 'app-instragram-list',
  templateUrl: './instragram-list.component.html',
  styleUrls: ['./instragram-list.component.css']
})
export class InstragramListComponent implements OnInit {

  feed: Feed;
  @Input() id: string;
  constructor(private bnk: BnkService) { }

  ngOnInit() {
    this.getDetailBnk(this.id);
  }

  getDetailBnk(id: string){
    this.bnk.getInstragram(id).subscribe(response => {
      this.feed = response;
    });
  }


}
