const liveURL = 'http://127.0.0.1:5000/api/v0/plants'
const testURL = 'http://localhost:3001/api/v1/'
const herokuURL = 'https://bloom-brothers-be-c1f874334094.herokuapp.com/api/v0/plants'
const babyURL = 'http://127.0.0.1:5000/api/v0/breeding'

function getFlowers() {
  return fetch(liveURL)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Failed to load flowers')
      }

      return resp.json()
    })
}

const postFlower = (newFlower, type) => {
  console.log('made it here and new flower is ', newFlower)
  const url = type === "new" ? liveURL : babyURL

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(newFlower),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      return response.json()
})
    .catch(err => console.log(err))
}

const deleteFlower = (id) => {
  return fetch(`http://127.0.0.1:5000/api/v0/plants/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// deleteFlower(22)

export { getFlowers, postFlower, deleteFlower }