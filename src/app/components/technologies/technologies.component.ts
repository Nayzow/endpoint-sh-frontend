import {Component, Input, OnInit} from '@angular/core';
import {TechnologyService} from '../../services/TechnologyService';
import {Technology} from '../../models/Technology';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  animations: [
    trigger('technologiesAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('1s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})

export class TechnologiesComponent implements OnInit {
  @Input() technologies: Technology[] = [];
  @Input() technologiesType: 'articles' | 'commands' = 'articles';

  constructor(private technologyService: TechnologyService) {}

  ngOnInit() {
    this.technologyService
      .getAll()
      .subscribe(technologies => this.technologies = technologies);
  }
}
