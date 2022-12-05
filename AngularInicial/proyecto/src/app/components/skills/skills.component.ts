import { Component } from '@angular/core';
import { Skills } from '../Skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skills[] = [
    {
      "Name":"Angular",
      "quality":2
    },
    {
      "Name":"Inglés",
      "quality":4
    },
    {
      "Name":"C++",
      "quality":3
    },
    {
      "Name":"HTML/CSS",
      "quality":5
    },
    {
      "Name":"Java",
      "quality":4
    },
    {
      "Name":"Self-learner",
      "quality":4
    }
  ];

  constructor(){}



}
