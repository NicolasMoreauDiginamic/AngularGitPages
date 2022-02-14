import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CreeCollegue } from "../models/collegue";
import { DataService } from "../services/data.service";

@Component({
    selector: "newCollegue",
    templateUrl: './componentNewCollegue.html',
    styleUrls: ['./componentNewCollegue.scss']
  })
  
export class CNewCollegue implements OnInit {

  nouveauCollegue: Partial<CreeCollegue>={

  }

  msgErreur?: string;
  msgOk?: string;

  constructor(private dataServ: DataService){

  }

  ngOnInit(): void {
    
  } 

  valider(colForm: NgForm){
    this.msgOk = undefined;
    this.msgErreur = undefined;

    this.dataServ.creerCollegue(this.nouveauCollegue)
    .subscribe({
      next: () => {
        this.msgOk = "Le collegue a bien été créé";
        colForm.reset();
        this.nouveauCollegue = {};
      },
      error: () => this.msgErreur = "Une erreur est survenue"
    });
  }
    
}
  