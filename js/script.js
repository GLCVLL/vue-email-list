const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// creo app
const app = Vue.createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        getRandomEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get(endpoint)
                .then((res) => {
                    const myemails = res.data.response;
                    this.emails.push(myemails);
                })
            };
        },
    },
    created() {
        this.getRandomEmails()
    }

});

app.mount('#root');