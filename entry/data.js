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
  labelAlign: String,
  wrapperCol: String,
  labelCol: String,
  disabled: Boolean,
  hidden: Boolean,
}
*/
