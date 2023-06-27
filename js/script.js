const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// creo app
const app = Vue.createApp({
    data() {
        return {
            emails: [],
            items: 10,
            emailsLoaded: false,
        }
    },
    methods: {
        getRandomEmails() {
            for (let i = 0; i < this.items; i++) {
                axios.get(endpoint)
                .then((res) => {
                    const myemails = res.data.response;
                    this.emails.push(myemails);
                    if (this.emails.length === this.items) {
                        this.emailsLoaded = true;
                    };
                })
            };
        },
    },
    created() {
        this.getRandomEmails()
    }

});

app.mount('#root');