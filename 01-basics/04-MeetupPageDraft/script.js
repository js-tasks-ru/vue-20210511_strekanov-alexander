import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';  

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов пунктов программы
 */
const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

const app = new Vue({
  data() {
    return {
      url: API_URL,
      meetupId: MEETUP_ID,
      meetup: null,
    }
  },
  methods: {
    fetchMeetup(id) {
      return fetch(`${this.url}/meetups/${id}`).then(response => response.json());
    },
    setMeetup() {
      this.fetchMeetup(this.meetupId).then(meetup => {
        this.meetup = meetup;
      });
    },
    agendaDefaultTitle(type) {
      return agendaItemDefaultTitles[type];
    },
    agendaIcon(type) {
      return `/assets/icons/icon-${agendaItemIcons[type]}.svg`;
    },
  },
  computed: {
    meetupDate() {
      const options = {
        year: 'numeric',
	      month: 'short',
	      day: 'numeric',
	      timezone: 'UTC',
      };
      return new Date(this.meetup.date).toLocaleDateString('ru', options);
    },
    meetupImage() {
      const image = getImageUrlByImageId(this.meetup.imageId);
      return {
        background: `url(${image})`, 
        'background-position': 'center'
      };
    },
  },
  mounted() {
    this.setMeetup();
  },
  template: '#app',
});

app.$mount('#app');