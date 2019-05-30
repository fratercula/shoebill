export default [
  [
    {
      key: 'nick',
      value: '12',
      label: 'nick',
      verify: {
        message: '错误',
        validator(value) {
          return value !== ''
        },
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
      verify: {
        message: '什么错误',
        validator(value) {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(value === 'error')
            }, 1000)
          })
        },
      }
    },
  ]
]
