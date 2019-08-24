import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  urlJson: any = 'https://jsonplaceholder.typicode.com/posts';
  person: any = {
    results: []
  };

  latestNews: any = {
    results: []
  };

  constructor( private httpClient: HttpClient, private router: Router ) {
    let dataPerson = [
      {
        nama: 'Sony Darmawan',
        jurusan: 'Sistem Informasi',
        semester: 9
      },
      {
        nama: 'Himawan Achmadi',
        jurusan: 'Sistem Informasi',
        semester: 9
      },
      {
        nama: 'Budiman Santoso',
        jurusan: 'Sistem Informasi',
        semester: 9
      },
      {
        nama: 'Akhmad Syarifudin',
        jurusan: 'Sistem Informasi',
        semester: 8
      }
    ];
    this.person.results = dataPerson;
    this.onGetLatestNews();
  }

  onDetailNews( id )
  {
    this.router.navigateByUrl('detail-news/' + id);
    //this.navCtrl.navigateRoot('/support');
  }

  onGetLatestNews()
  {
    let data = this.httpClient.get( this.urlJson );
    return data.subscribe( res => {
      this.latestNews.results = res;
    });
  }
}
