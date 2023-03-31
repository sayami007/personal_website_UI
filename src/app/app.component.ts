import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, ObservableLike, take } from 'rxjs';

interface Users {
  UserKey: number;
  UserName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public userList$!: Observable<Users[]> ;

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.userList$ = this.httpClient.get(
      'https://polydactyl-creative-ravioli.glitch.me/users'
    ) as Observable<Users[]>;
  }
}
