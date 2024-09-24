import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-info',
  standalone: true,
  imports: [NgIf],
  templateUrl: './show-info.component.html',
  styleUrl: './show-info.component.css'
})
export class ShowInfoComponent implements OnInit{
  userData: any = null; // começo com null para verificar se tem algo,
              	        // se não tiver, vai aparecer mensagem de erro

  constructor(private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem('userData');
    this.userData = data ? JSON.parse(data) : null;
    //localStorage.removeItem('userData');
  }
}
