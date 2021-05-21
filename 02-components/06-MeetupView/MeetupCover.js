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
    meetupImage() {
      return `--bg-url: url(${this.link})`;
    }
  },

  template: `
    <div class="meetup-cover" :style="meetupImage">
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
};
