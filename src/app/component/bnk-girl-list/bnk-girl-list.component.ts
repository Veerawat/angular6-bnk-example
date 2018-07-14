import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { BnkService } from '../../service/bnk.service';


@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {

  members: Member[];
  
  constructor(private bnk: BnkService) { }

  ngOnInit() {
    this.getBnkList();
  }

  getBnkList(){
    this.bnk.getListBnk().subscribe(response => this.members = response);
  }

}
