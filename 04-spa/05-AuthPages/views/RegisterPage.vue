<template>
  <form class="form" @submit="validateForm">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input type="email" class="form-control" v-model="email" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input type="text" class="form-control" v-model="fullname" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input type="password" class="form-control" v-model="password" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input type="password" class="form-control" v-model="repassword" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"><input type="checkbox" v-model="isagree" /> Я согласен с условиями <span></span></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link to="/login">Войдите</router-link>
    </div>
  </form>
</template>

<script>
import { register } from '../data';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: null,
      fullname: null,
      password: null,
      repassword: null,
      isagree: false,
    }
  },
  methods: {
    isDataValid() {
      if (!this.email) {
        alert('Требуется ввести Email');
        return false;
      }
      if (!this.fullname) {
        alert('Требуется ввести полное имя');
        return false;
      }
      if (!this.password) {
        alert('Требуется ввести пароль');
        return false;
      }
      if (this.password != this.repassword) {
        alert('Пароли не совпадают');
        return false;
      }
      if (!this.isagree) {
        alert('Требуется согласиться с условиями');
        return false;
      }
      return true;
    },
    validateForm(e) { 
      e.preventDefault();
      if (this.isDataValid()) {
        let obj = null;
        register(this.email, this.fullname, this.password)
        .then((data) => obj = data)
        .then(() => {
          if (obj.statusCode == 400) {
            alert(obj.message);
          } else {
            alert(obj.id);
            this.$router.push('login');
          }       
        });
      }
    }
  },
};
</script>

<style></style>
