export default [
  [
    {
      type: 'forms',
      props: {
        key: 'nick',
        value: '123213',
        label: 'nick',
      }
    },
    {
      type: 'forms',
      props: {
        key: 'age',
        value: '123213',
        label: 'age',
        dispatch(value) {
          this.update('nick', value)
        }
      }
    },
  ],
]
