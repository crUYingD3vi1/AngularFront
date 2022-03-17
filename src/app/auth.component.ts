import { Component } from '@angular/core';

@Component({
  selector: 'auth-view',
  template: `
    <h1>Зарегистрироваться</h1>
    <form id="addUser">
      <input type="text" name="name" placeholder="Имя">
      <br>
      <input type="email" name="email" placeholder="email">
      <br>
      <input type="text" name="pwd" placeholder="Пароль">
      <br>
      <button class="btn" type="submit">Добавить</button>
    </form>
  `,
  styleUrls: []
})
export class AuthView {}
