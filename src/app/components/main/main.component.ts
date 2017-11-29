import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../service/DataService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // private books;
  private prams = {
      bookName: "",
      bookPrice:"",
      bookType: ""
    }

  constructor(
    private http:Http,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.loadBooks(this.prams);
  }

  private loadBooks(params){
    this.http.get("/bookApi/book.php",{
        "params":params
    }).subscribe((response)=>{
          // this.books = response.json().result;
          this.dataService.books = response.json().result;
        });
  }

  private getParams(pramas){
    console.log("main",pramas);
    this.prams = pramas;
    this.loadBooks(this.prams);
  }

}
