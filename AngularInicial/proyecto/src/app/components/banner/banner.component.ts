import { Component,OnInit } from '@angular/core';
import { faClose, faEdit } from '@fortawesome/free-solid-svg-icons';
import { EditService } from 'src/app/service/edit.service';
import {Observable} from 'rxjs'
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class BannerComponent implements OnInit {
  edit:boolean=false;
  faTimes = faEdit;
  faTime=faClose;
  editing:boolean=false;
  input:string="";
  text:string="Me llamo Federico Richter y soy estudiante de 4to año de Ingeniería en Computación en la Universidad Nacional de Córdoba. Me gusta y me llama la atención la creación de todo tipo de proyectos referidos tanto a la programación como la electrónica. Me encuentro cursando la segunda etapa del programa Argentina Programa 4.0, aprendiendo sobre el desarrollo Full-Stack.";
  constructor(private editService:EditService){}

  ngOnInit(): void {
    this.editService.logIn$.subscribe((logIn$) =>{
      this.edit=logIn$
    })
    const log = document.getElementById("input");
    log?.addEventListener('log', this.updateValue);
  }

  deleteText(){
    this.text="";
  }
  editText(){
    this.editing=!this.editing;
  }

  updateValue(){
    const input = document.getElementById('text-area') as HTMLInputElement;
    this.text=input.value;
  }


}
