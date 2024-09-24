import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  userData = {
    nome: '',
    email: '',
    senha: ''
  };

  errors = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    this.errors = { nome: '', email: '', senha: '' };

    // Lógica da validação < = pode não estar ideal, mas cobre os requisitos que foram pedidos
    if (!this.userData.nome) {
      this.errors.nome = 'O nome é obrigatório.';
    }
    if (!this.userData.email) {
      this.errors.email = 'O e-mail é obrigatório.';
    } else if (!this.isEmailValid(this.userData.email)) {
      this.errors.email = 'O e-mail não é válido.';
    }
    if (!this.userData.senha) {
      this.errors.senha = 'A senha é obrigatória.';
    } else if (this.userData.senha.length < 8) {
      this.errors.senha = 'A senha deve ter pelo menos 8 caracteres.';
    }

    // Se não houver erros, salva os dados e navega para a próxima página
    if (!this.errors.nome && !this.errors.email && !this.errors.senha) {
      localStorage.setItem('userData', JSON.stringify(this.userData));
      this.router.navigate(['/show-info']);
    }
}

  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

}
