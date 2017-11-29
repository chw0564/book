import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Output()
  private sendSeach:EventEmitter<any> = new EventEmitter<any>();

  private bookName:string = "";
  private bookPrice:string = "";
  private bookType:string = "";

  private bookTypes;

  constructor(
    private http:Http
  ) { }

  ngOnInit() {
    this.http.get("/bookApi/bookType.php")
        .subscribe((resposne)=>{
          this.bookTypes = resposne.json().result;
        });
  }

  private emitSeach(){
    this.sendSeach.emit({
      "bookName":this.bookName,
      "bookPrice":this.bookPrice,
      "bookType":this.bookType
    })
  }

}
