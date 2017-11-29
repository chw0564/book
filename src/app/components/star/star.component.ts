import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input()
  private level;
  private stars = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

}
