import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.page.html',
  styleUrls: ['./detail-news.page.scss'],
})
export class DetailNewsPage implements OnInit {
  id: any = null;
  title: any = null;
  url_news: any = 'https://jsonplaceholder.typicode.com/posts';
  getNews: any = {
    userId: 1,
    id: 1,
    title: "",
    body: ""
  };

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title');
    this.onGetNews();
  }

  ngOnInit() {

  }

  onGetNews()
  {
    let data = this.httpClient.get( this.url_news + '/' + this.id );
    return data.subscribe( res => {
      this.getNews = res;
      console.log( this.getNews );
    });
  }
}
