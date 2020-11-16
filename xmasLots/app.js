new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      selectedName: null,
      drawers: [
        { password: '7823', name: 'Birgit' },
        { password: '3498', name: 'Celina' },
        { password: '2390', name: 'Elisa' },
        { password: '2353', name: 'Hannes' },
        { password: '8934', name: 'Karla' },
        { password: '4563', name: 'Lena' },
        { password: '4382', name: 'Marius' },
        { password: '0940', name: 'Volker' },
      ],
      showResult: false,
      lot: '',
      wrongPW: false,
      userPW: '',
      name: '',
      apiError: false,
      loading: false,
    }
  },

  methods: {
    btnClick: async function () {
      this.loading = true
      this.showResult = false
      this.wrongPW = false
      this.apiError = false
      var result = false
      this.drawers.forEach((drawer) => {
        if (drawer.password == this.userPW) {
          result = true
          this.name = drawer.name
        }
      })
      if (result) {
        try {
          const response = await axios.post(
            'https://christmas-lots-api.herokuapp.com/api/drawLot',
            {
              name: this.name,
            }
          )
          this.lot = response.data.name
          if (!this.lot) {
            this.apiError = true
          } else {
            this.showResult = true
          }
        } catch (e) {
          this.apiError = true
          console.log(e)
        } finally {
          this.loading = false
        }
      } else {
        this.wrongPW = true
        this.loading = false
      }
    },
  },
})
