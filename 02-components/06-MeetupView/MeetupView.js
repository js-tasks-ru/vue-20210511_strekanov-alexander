import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

const MeetupView = {
  name: 'MeetupView',

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },
  
  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    meetupDate() {
      return new Date(this.meetup.date);
    },
    meetupImageUrl() {
      const imageUrl = getImageUrlByImageId(this.meetup.imageId);
      return imageUrl ? imageUrl : '';
    },
  },

  template: `
    <div>
      <meetup-cover :title="meetup.title" :link="meetupImageUrl"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>
            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="meetupDate"></meetup-info>
          </div>
        </div>
      </div>
    </div>`,
};

export default MeetupView;
