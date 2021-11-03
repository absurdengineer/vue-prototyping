const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      age: 20,
    };
  },
  methods: {
    increament() {
      this.age++;
    },
  },
  computed: {
    fullName() {
      console.log("Full Name is Computed");
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    },
  },
});

vm.mount("#app");
