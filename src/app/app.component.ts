import { Component } from '@angular/core';
import Jamstik, { IMidiEvent, isOnFilter, isOffFilter } from "jamstik";
import { FirebaseNotesService } from 'app/firebase-notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private colors = ['red', 'pink', 'orange', 'green', 'blue', 'purple'];
  private colorIndex = 0;

  constructor(private notes: FirebaseNotesService) {
    notes.fakeNotes$.subscribe((n) => {
      console.log(n);
      this.colorIndex++;
    });

  }

  get color() {
    return this.colors[this.colorIndex % this.colors.length];
  }

}
