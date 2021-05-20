import { getAgendaItemIcons, getAgendaItemDefaultTitles } from './data.js';

export default {
  name: 'MeetupAgendaItem',
  
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    agendaItemIcon() {
      const icons = getAgendaItemIcons(); 
      return `/assets/icons/icon-${icons[this.agendaItem.type]}.svg`;
    },
    agendaItemTitle() {
      if (!this.agendaItem.title) {
        const defaultTitles = getAgendaItemDefaultTitles();
        return defaultTitles[this.agendaItem.type];
      }
      return this.agendaItem.title;
    }
  },

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaItemIcon" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ agendaItemTitle }}</h5>
        <p v-if="agendaItem.speaker">
          <span>{{ agendaItem.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
};
