import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';

  constructor() {
    const config = {
      apiKey: "AIzaSyCYb_HIxSgUZ6RQqBxc6PXs4bkPn4CIg7I",
      authDomain: "blog-8652b.firebaseapp.com",
      databaseURL: "https://blog-8652b.firebaseio.com",
      projectId: "blog-8652b",
      storageBucket: "blog-8652b.appspot.com",
      messagingSenderId: "363315953741"
    };
    firebase.initializeApp(config);
  }
}
