import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function JakahTopics() {
  const [categories,setCategories] = React.useState([])
  const navigate = useNavigate()
  React.useEffect(()=>{
    fetch('http://localhost:8080/api/generate/jakah/topics')
    .then(response => response.json())
    .then(data => setCategories(data))
  },[])
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
                    <Link
                      to={`/jakah/topics/${topic.cat_id}/${topic.topic_id}`}
                      className='block p-2 border rounded cursor-pointer'
                    >
                      {topic.title}
                    </Link>
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
