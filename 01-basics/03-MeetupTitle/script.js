import Vue from './vendor/vue.esm.browser.js';

new Vue({
    el: '#app',
    data() {
        return {
            url: 'https://course-vue.javascript.ru/api/meetups/',
            meetupId: 1,
            meetup: null,
            meetupsCount: 5,
        }
    },
    methods: {
        fetchMeetup(id) {
            return fetch(`${this.url}${id}`).then(response => response.json());    
        },
        setMeetup() {
            this.fetchMeetup(this.meetupId).then(meetup => {
                this.meetup = meetup;
            });
        },
    },
    watch: {
        meetupId() {
            this.setMeetup();
        }
    },
    created() {
        this.setMeetup();
    }
});