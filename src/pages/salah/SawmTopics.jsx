import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function SawmTopics() {
  const [categories,setCategories] = React.useState([])
  const navigate = useNavigate()
  React.useEffect(()=>{
    fetch('http://localhost:8080/api/generate/sawm/topics')
    .then(response => response.json())
    .then(data => setCategories(data))
  },[])
  return (
    <div>
      {
        categories.map((category,index)=>(
          <Link
          key={index}
                      to={`/sawm/topics/${category.id}`}
                      className='block p-2 border rounded cursor-pointer'
                    >
                      {category.title}
                    </Link>
        ))
      }
    </div>
  )
}
