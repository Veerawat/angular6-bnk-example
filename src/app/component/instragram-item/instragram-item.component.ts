import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from '../../models/feed';

@Component({
  selector: 'app-instragram-item',
  templateUrl: './instragram-item.component.html',
  styleUrls: ['./instragram-item.component.css']
})
export class InstragramItemComponent implements OnInit {

  @Input() item: FeedItem
  constructor() { }

  ngOnInit() {
  }

}
