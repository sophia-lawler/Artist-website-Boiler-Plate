exports.seed = (knex) => {
  return knex('shows').insert([
    {
      id: 1,
      title: 'Show1',
      date: '9/07/2022',
      description: 'This is the writeup to my cool show',
      gallery: 'Artspace',
    },
    {
      id: 2,
      title: 'Show2',
      date: '9/05/2022',
      description: 'this is the second writeup for a cool show that happened',
      gallery: 'Blye Oyster',
    },
    {
      id: 3,
      title: 'Show3',
      date: '9/04/2022',
      description: 'this is the third writup for cool as show',
      gallery: 'Auckland Art Gallery',
    },
  ])
}
