import { Component } from '@angular/core';
import { Injectable, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 
  data: any = {};
  latitude: number = 51.0496;
  longitude: number = 13.7379;

  constructor(private jsonp: Jsonp) {}
 
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    let url = 'https://api.darksky.net/forecast/c34629fbb6cba34f3f2994cb220617d0/' + this.latitude + ',' + this.longitude + '?lang=de&units=si&callback=JSONP_CALLBACK'
    this.jsonp.request(url).subscribe(
      response => this.data = response.json()
    );
  }
}