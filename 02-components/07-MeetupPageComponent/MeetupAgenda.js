import MeetupAgendaItem from './MeetupAgendaItem.js';

export default {
  name: 'MeetupAgenda',
  
  components: {
    MeetupAgendaItem,
  },
  
  props: {
    agenda: {
      type: Array,
      required: true,
    }
  },

  template: `
    <div class="meetup-agenda" :agenda="agenda">
      <meetup-agenda-item 
        v-for="(agendaItem, index) in agenda"  
        :agenda-item="agendaItem" 
        :key="index"
      ></meetup-agenda-item>  
    </div>`,
};