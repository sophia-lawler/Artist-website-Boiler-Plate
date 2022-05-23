exports.seed = (knex) => {
  return knex('shows').insert([
    {
      id: 1,
      name: 'Show1',
      description:
        'This is the writeup to my cool show',
      gallery: 'Artspace',
    },
    {
      id: 2,
      name: 'Show2',
      description:
        "this is the second writeup for a cool show that happened",
      country: 'Blye Oyster',
    },
    {
      id: 3,
      name: 'Show3',
      description:
        "this is the third writup for cool as show",
      country: 'Auckland Art Gallery',
    },
  ])
}