import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import districtJsonData from "../assets/districtsJsonData.json";
const appStore = (set)=>({
    timings : null,
    district : localStorage.getItem("district"),
    districts : districtJsonData,
    setTimings : (timings) =>{
        set(()=>({
            timings : timings
        }))
    },
    setDistrict : (district) =>{
        set(()=>({
            district : district
        }))
    },
    setDistricts : (districts) =>{
        set(()=>({
            districts: districts
        }))
    },
    setFunction : () =>{
        set((state)=>({
            loading : !state.loading,
        }))
    },
})
const useStore = create(
    devtools(
        persist(appStore,{
            name : "mumin_app",
        })
    )
)
export default useStore;