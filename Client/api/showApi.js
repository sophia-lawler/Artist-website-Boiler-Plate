import request from 'superagent'

export function getShows() {
  console.log('hitting api')
  return request.get('/api/v1/shows').then((res) => res.body)
}
