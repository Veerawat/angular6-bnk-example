import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-instragram',
  templateUrl: './instragram.component.html',
  styleUrls: ['./instragram.component.css']
})
export class InstragramComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    
  }

 
}
