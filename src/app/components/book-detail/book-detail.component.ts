import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private bookId = "";

  constructor(
    private activatedRoute:ActivatedRoute
  ) {
    // this.activatedRoute.snapshot.queryParams.bookId 获取当前路由get接受到参数
    // console.log("bookid:",this.activatedRoute.snapshot.queryParams.bookId);

    // this.activatedRoute.snapshot.params.bookId 获取当前路由的rest风格参数
    console.log("bookid:",this.activatedRoute.snapshot.params.bookId);
    this.bookId = this.activatedRoute.snapshot.params.bookId;
  }

  ngOnInit() {
  }

}
