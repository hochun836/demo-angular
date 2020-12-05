import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  apiLoaded: Observable<boolean>;

  options: google.maps.MapOptions = {
    center: { lat: 28, lng: 128 },
    zoom: 4
  };

  constructor(httpClient: HttpClient) {
    // Lazy Loading the API not work
    // this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCZwboCRQO0i9PPovBYcscsg-oVZEthWSQ', 'callback')
    //   .pipe(
    //     map(() => true),
    //     catchError(() => of(false)),
    //   );
  }

  ngOnInit(): void {
  }
}
