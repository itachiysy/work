import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public title = "胡青元"
  public content = "<h2>我是内容<h2>"

  constructor() { }

  ngOnInit(): void {
  }

}
