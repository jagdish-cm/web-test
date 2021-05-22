import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  users = [];

  constructor(private dataService : DataService){}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    })
  }
}
