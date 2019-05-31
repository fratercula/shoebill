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
      disabled: true,
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
      hidden: true,
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
              resolve(value === '???')
            }, 1000)
          })
        },
      }
    },
  ]
]


/*
{
  key: String,
  value: String/Number/Boolean/Object/Array,
  label: String,
  verify: {
    message: String,
    validator: Function,
  },
  onChange: Function,
  subscribe: Function,
  error: String,
  type: String,

  disabled: Boolean,
  hidden: Boolean,
}
*/
