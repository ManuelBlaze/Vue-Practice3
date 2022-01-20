/**
 * counter limit
 * @constant
 * @type {Number}
 * @default
 */
const LIMIT = 37;

// create vue app
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter() {
      const that = this;
      setTimeout(function() {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    verifyCounter() {
      const position = this.counter < LIMIT
        ? 'Not there yet'
        : 'Too much!';

      return this.counter === LIMIT
        ? this.counter
        : position;
    }
  },
  methods: {
    addFive() {
      this.counter = this.counter + 5;
    },
    addOne() {
      this.counter++;
    },
  },
});

// mount app
app.mount("#assignment");
