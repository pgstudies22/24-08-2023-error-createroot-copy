import { createRoot } from 'react-dom/client'
import { useState, StrictMode } from 'react'

const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile']
const breeds = []

function SearchParams() {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            onChange={(e) => setAnimal(e.target.value)}
            id="animal"
            value={animal}
          >
            {animals.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            onChange={(e) => setBreed(e.target.value)}
            id="breed"
            value={breed}
            disabled={breeds.length === 0}
            // -2:20
          >
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Me adote!</h1>
      <SearchParams />
    </div>
  )
}

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
