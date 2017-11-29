import { Component, OnInit,Input } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../service/DataService';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // 需要加载 默认数据
  // @Input()
  // private books;

  constructor(
    private http:Http,
    private dataServer:DataService
  ) { }

  //是在组件被访问时 会执行的函数
  ngOnInit(): void {
    // this.http.get("/bookApi/book.php")
    //     .subscribe((response)=>{
    //       this.books = response.json().result;
    //     });
    // this.books = this.dataServer.books;
    // console.log(this.dataServer);
  }
  

}
