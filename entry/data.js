export default [
  [
    {
      key: 'zero',
      type: 'Input',
      label: 'zero',
      verify: {
        message: 'error',
        validator(value) {
          return !!value
        },
      },
    },
  ],
  [
    {
      key: 'one',
      type: 'Custom',
      label: 'one',
      options: [
        {
          label: 'one',
          value: 'one',
        },
        {
          label: 'two',
          value: 'two',
        },
      ],
    },
  ],
]

//     {
//       key: 'age',
//       disabled: true,
//       type: 'Input',
//       value: '123213',
//       onChange(value) {
//         this.update('nick', { value })
//       },
//     },
//   ],
//   [
//     {},
//     {
//       type: 'input',
//       key: 'tttt',
//       value: 'op',
//       label: 'txt',
//       hidden: true,
//       subscribe(key, value) {
//         if (key === 'tttt') {
//           value === 'error'
//             ? this.setError('age', '???')
//             : this.removeError('age')
//         }
//       },
//       verify: {
//         message: '什么错误',
//         validator(value) {
//           return new Promise((resolve) => {
//             setTimeout(() => {
//               resolve(value === '???')
//             }, 1000)
//           })
//         },
//       }
//     },
//   ]
// ]


/*

<SForm inline onSubmit={} defaultValue={} />

{
  type: String,
  key: String,
  value: any,
  label: String,
  validator: Function/String,
  effects: Function,
  subscribe: Function,
  editable: Boolean,
  hidden: Boolean,
  disabled: Boolean,
  style: {
    colon: ':',
    ...
  }
}

registeValidator('email', (value) => {
  reject(...)
})

registeFormType('checkbox', (key, data) => {
  return (

  )
})
*/
