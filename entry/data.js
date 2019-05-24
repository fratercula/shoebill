export default [
  [
    {
      key: 'nick',
      value: '12',
      label: 'nick',
      verify(value) {
        return value !== undefined
      }
    },
    {
      key: 'age',
      type: 'input',
      value: '123213',
      onChange(value) {
        this.update('nick', { value })
      },
    },
  ],
  [
    {},
    {
      type: 'input',
      key: 'tttt',
      value: 'op',
      label: 'txt',
      subscribe(key, value) {
        if (key === 'tttt') {
          value === 'error'
            ? this.setError('age', '???')
            : this.removeError('age')
        }
      },
      verify(value) {
        return value === 'error'
      }
    },
  ]
]
