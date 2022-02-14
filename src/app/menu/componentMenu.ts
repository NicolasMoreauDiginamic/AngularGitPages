import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'menu', 
  templateUrl: './componentMenu.html'
})

export class CMenu implements OnInit {

  pseudo: Observable<String | null>;
  msg = '';
  constructor(private route: ActivatedRoute, private router: Router){
    this.pseudo = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('pseudo'))
    );
  }

  ngOnInit(): void {
      
  }

  chargement(){
    this.msg = "chargement en cours...";
    setTimeout(() => this.router.navigateByUrl('/collegues'),2000)
  }

}