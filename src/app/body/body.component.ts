import { Component, OnInit } from '@angular/core';
import { IMovie } from "../movie";
import { CollectableService } from './../services/collectable.service'
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(private CollectableService: CollectableService ) { }
  ngOnInit(): void {
    this.movies = this.CollectableService.getMovies();
  }
  movies: IMovie[];

}
