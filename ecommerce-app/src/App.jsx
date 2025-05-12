import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'


function App() {

  const [products] = useState([
    { id: 1, name: 'Rick and Morty', price: 19.99, category: "Comedy", image: 'src/assets/rickmort_s7.png', description: 'Season 7 Bluray' },
    { id: 2, name: 'Severance', price: 19.99, category: "Thriller", image: 'src/assets/sever_s1.png', description: 'Season 1 Bluray' },
    { id: 3, name: 'Poker Face', price: 19.99, category: "Thriller", image: 'src/assets/pokerface_s1.png', description: 'Season 1 Bluray' },
    { id: 4, name: 'House of the Dragon', price: 19.99, category: "Drama", image: 'src/assets/housedragon_s2.png', description: 'Season 2 Bluray' },
    { id: 5, name: 'Rick and Morty', price: 19.99, category: "Comedy", image: 'src/assets/rickmort_s3.png', description: 'Season 3 Bluray' },
    { id: 6, name: 'The Last of Us', price: 19.99, category: "Thriller", image: 'src/assets/lastofus_s1.png', description: 'Season 1 Bluray' },
    { id: 7, name: 'Rick and Morty', price: 19.99, category: "Comedy", image: 'src/assets/rickmort_s1.png', description: 'Season 1 Bluray' },
    { id: 8, name: 'House of the Dragon', price: 19.99, category: "Drama", image: 'src/assets/housedragon_s1.png', description: 'Season 1 Bluray' },
    { id: 9, name: 'Barry', price: 19.99, category: "Thriller", image: 'src/assets/barry_s1.png', description: 'Season 1 Bluray' },
  ])

  return (
    <>
      <div className="hero-image">
        <h1>Discount Box-Set Store</h1>
      </div>
      <h2>You can own all your favorite shows with our everyday low prices!</h2>

      <ProductList products={products} />
      <hr className="bottom"/>

    </>
  )
}

export default App
