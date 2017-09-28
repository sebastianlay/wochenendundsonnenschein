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

  // the darksky api key (should not be deployed in an js app)
  // in theory we should have our own proxy service to keep it secret
  key: string = 'c34629fbb6cba34f3f2994cb220617d0'

  // default coordinates (Dresden)
  latitude: number = 51.0496;
  longitude: number = 13.7379;
 
  // holds the result of the API calls
  data: any = {};

  constructor(private jsonp: Jsonp) {}
 
  // run on start with default coordinates
  ngOnInit(): void {
    this.loadData();
  }

  // make the actual API call and make it available in the app
  // since darksky disabled CORS we have to use JSONP
  // see: https://darksky.net/dev/docs/faq#cross-origin
  loadData(): void {
    let url = 'https://api.darksky.net/forecast/' + this.key + '/' + this.latitude + ',' + this.longitude + '?lang=de&units=si&callback=JSONP_CALLBACK'
    this.jsonp.request(url).subscribe(
      response => this.data = response.json()
    );
  }
}