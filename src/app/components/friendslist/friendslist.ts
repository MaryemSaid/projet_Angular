import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friendslist',
  imports: [FormsModule],
  templateUrl: './friendslist.html',
  styleUrl: './friendslist.css',
})
export class Friendslist {
  friends = [
    { name: 'Ahmed' , email:'ahmed@esprit.tn'},
    { name: 'Mariem' , email:'mariem@esprit.tn'},
    { name: 'Charlie' , email:'charlie@esprit.tn'}
  ];
}
