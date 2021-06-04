<template>
  <form class="form" @submit="validateForm">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input type="email" placeholder="demo@email" class="form-control" v-model="email" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input type="password" placeholder="password" class="form-control" v-model="password" />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block"
      >Войти</button>
    </div>
    <div class="form__append">
      Нет аккаунта?
      <router-link to="/register">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import { login } from '../data';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    isDataValid() {
      if (!this.email) {
        alert('Требуется ввести Email');
        return false;
      }
      if (!this.password) {
        alert('Требуется ввести пароль');
        return false;
      }
      return true;
    },
    validateForm(e) { 
      e.preventDefault();
      if (this.isDataValid()) {
        let obj = null;
        login(this.email, this.password)
        .then((data) => obj = data)
        .then(() => {
          console.log(obj);
          if (obj.statusCode == 403) {
            alert(obj.message);
          } else {
            alert(obj.fullname);
            const redirect = this.$route.query.from ? this.$route.query.from : '/';
            this.$router.push(redirect);
          }       
        });
      }
    }  
  },
};
</script>

<style></style>
