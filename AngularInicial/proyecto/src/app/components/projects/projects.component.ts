import { Component,OnInit } from '@angular/core';
import { Project } from '../Projects';
import { EditService } from 'src/app/service/edit.service';
import { faClose, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  edit:boolean=false;
  editing:boolean=false;

  projects:Project[]=[
    {
      "Name":"ToDo App",
      "project":"Simple aplicación en la cual se pueden ingresar tareas a realizar con su fecha de caducidad para ser informado de la misma. ",
      "tech":["Angular","HTML","CSS"],
      "id":1
    },
    {
      "Name":"Buscador del camino más corto entre ciudades",
      "project":"Utilizando una búsqueda en amplitud (Teoría de grafos), se ingresan una seria de ciudades y sus ditancias, y el algoritmo busca el camino mas corto entre un origen y un destino sin repetir las ciudades.",
      "tech":["C++","Teoría de Grafos"],
      "id":2
    },
    {
      "Name":"Portafolio Personal",
      "project":"Portafolio donde describo mis trabajos, proyectos y estudios y que funciona como introducción a mí. Realizado en el marco del curso Argentina Programa.",
      "tech":["Angular","HTML","CSS"],
      "id":3
    }
  ]

  faClose=faClose;
  faEdit=faEdit;
  constructor(private editService:EditService){}

  ngOnInit(): void {
    this.editService.logIn$.subscribe((logIn$) =>{
      this.edit=logIn$
    })
  }
  deleteProject(id:number){
    this.projects=this.projects.filter((p)=>{
      p.id!=id
    })
  }

  editChange(){
    this.editing=!this.editing
  }
  updateValue(id:number){
    const input_t = document.getElementById('text-area-name') as HTMLInputElement;
    const input_p = document.getElementById('text-area-project') as HTMLInputElement;

    for(let i=0;i<this.projects.length;i++){
      if(this.projects[i].id=id){
        this.projects[i].Name=input_t.value;
        this.projects[i].project=input_p.value
      }
    }
  }
}
