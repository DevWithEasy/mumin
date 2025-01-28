import { useEffect } from "react"
import { useNavigate } from "react-router"
import base_url from "../utils/base_url"
import LoadingSlider from "../components/Loading"

export default function Splash() {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/app')
    },3000)
  })
  return (
    <div
      className="bg h-screen flex flex-col justify-center items-center space-y-2  bg-cover bg-no-repeat"
    >
      <img
        src={`${base_url}/icon.png`}
        className="h-48"
      />
      <div
        className="flex flex-col items-center space-y-1 md:pb-0 "
      >
        <h1
          className="text-3xl font-extrabold text-teal-700"
        >
          মুমিন
        </h1>
        <p
          className="text-gray-500"
        >
          আল্লাহর ইচ্ছার কাছে সমর্পন
        </p>
        <div
          className="w-full"
        >
          <LoadingSlider />
        </div>
      </div>

    </div>
  )
}
