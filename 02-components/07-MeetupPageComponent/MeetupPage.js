import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const MeetupPage = {
  name: 'MeetupPage',

  components: {
    MeetupView,
  },

  data() {
    return {
      meetup: null,
    }
  },

  methods: {
    setMeetup() {
      fetchMeetup(MEETUP_ID).then(meetup => {
        this.meetup = meetup;
      });
    },
  },  

  mounted() {
    this.setMeetup();
  },

  template: `<div v-if="meetup">
    <meetup-view :meetup="meetup"></meetup-view>
  </div>`,

};

export default MeetupPage;
