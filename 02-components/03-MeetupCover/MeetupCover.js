export default {
  name: 'MeetupCover',
  
  props: {
    title: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
  },  

  computed: {
    imageCover() {
      return this.link ? `--bg-url: url(${this.link})` : '';
    }  
  },

  template: `
    <div class="meetup-cover" :style="imageCover">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
};
