export default [
  [
    {
      type: 'forms',
      props: {
        key: 'nick',
        value: '12',
        label: 'nick',
      }
    },
    {
      type: 'forms',
      props: {
        key: 'age',
        type: 'input',
        value: '123213',
        label: 'age',
        onChange(key, value) {
          this.dispatch('nick', value)
        }
      }
    },
  ],
  [
    {
      type: 'forms',
      props: {
        type: 'input',
        key: 'tttt',
        value: 'op',
        label: 'txt',
        subscribe(key, value) {
          console.log(key, value)
          this.dispatch('nick', 333)
        },
      }
    },
  ]
]
