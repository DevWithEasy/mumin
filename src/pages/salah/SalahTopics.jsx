import React from 'react'
import { Link } from 'react-router'

export default function SalahTopics() {
  const [topics,setTopics] = React.useState([])
  React.useEffect(()=>{
    fetch('http://localhost:8080/api/generate/salah/topics')
    .then(response => response.json())
    .then(data => setTopics(data))
  },[])
  console.log(topics)
  return (
    <div>
      {
        topics.map((topic,index)=>(
          <Link
           to={`/salah/topics/${topic.id}`} key={index}
           className='block p-2 border-b border-gray-200 hover:bg-gray-100'
          >
            {`${index+1} - (${topic.category.id}/${topic.title_id.id}) - (${topic.category.title}/${topic.title_id.title})`}
           </Link>
        ))
      }
    </div>
  )
}
