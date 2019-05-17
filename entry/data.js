export default [
  [
    {
      key: 'nick',
      value: '12',
      label: 'nick',
    },
    {
      key: 'age',
      type: 'input',
      value: '123213',
      label: 'age',
      onChange(value) {
        this.dispatch('nick', value)
      },
    },
  ],
  [
    {
      type: 'input',
      key: 'tttt',
      value: 'op',
      label: 'txt',
      subscribe(key, value) {
        console.log(key, value)
        this.dispatch('nick', value)
      },
    },
  ]
]
