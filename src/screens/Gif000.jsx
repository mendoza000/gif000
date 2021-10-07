import React, {useState} from 'react'
import AddCategory from '../components/AddCategory'
import GifGrid from '../components/GifGrid'

const Gif000 = () => {

  const [categories, setCategories] = useState(['Pokemon'])

  return(
    <div>
      <h1>Gif000</h1>
      <AddCategory 
        setCategories={setCategories}
        categories={categories}
      />
      <ol>
        {
          categories.map(cat => {
            return <GifGrid key={cat} cat={cat}/>
          })
        }
      </ol>
    </div>
  )

}

export default Gif000