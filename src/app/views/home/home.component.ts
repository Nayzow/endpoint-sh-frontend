import { Component, OnInit } from '@angular/core';
import { TechnologyService } from "../../services/TechnologyService";
import { Technology } from "../../models/Technology";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  technologiesWithArticles: Technology[] = [];
  technologiesWithCommands: Technology[] = [];

  constructor(private technologyService: TechnologyService) {
  }

  ngOnInit() {
    this.technologyService.getAll(null, true).subscribe(technologies => this.technologiesWithArticles = technologies);
    this.technologyService.getAll(true, null).subscribe(technologies => this.technologiesWithCommands = technologies);
  }
}
