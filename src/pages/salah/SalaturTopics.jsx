import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function Salaturcategories() {
  const [categories,setCategories] = React.useState([])
  const navigate = useNavigate()
  React.useEffect(()=>{
    fetch('http://localhost:8080/api/generate/salatur/topics')
    .then(response => response.json())
    .then(data => setCategories(data))
  },[])
  console.log(categories)
  return (
    <div>
      {
        categories.map((category,index)=>(
          <div
            key={index}
          >
            <p
              className='p-2 border-b'
            >
              {category?.name}
            </p>
            <div
              className='p-2 space-y-2'
            >
              {
                category?.topics.map(topic =>{
                  return (
                    <div
                      onClick={()=>navigate(`/salatur/topics/${topic.cat_id}/${topic.topic_id}`)}
                      className='p-2 border rounded'
                    >
                      {topic.title}
                    </div>
                  )
                })
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}
