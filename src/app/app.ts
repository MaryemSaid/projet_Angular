import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Notifications } from './components/notifications/notifications';
import { Footer } from './components/footer/footer';
import { Profile } from './components/profile/profile';
import { Friendslist } from './components/friendslist/friendslist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Navbar,Profile,Friendslist,Notifications,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gestion des conférences');
}