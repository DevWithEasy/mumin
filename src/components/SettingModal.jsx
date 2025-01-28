import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect } from "react";
import { IoIosSettings } from "react-icons/io";
import districtJsonData from "../../src/assets/districtsJsonData.json";
import PrayerTime from "../utils/PrayerTime";
import useStore from "../store/appStore";

export function SettingsModal() {
    const { setTimings,district, setDistrict,districts,setDistricts } = useStore()
    const getCityPrayerTimings = async (city, country) => {
        const response = await fetch(
            PrayerTime.getCityApiUrl(city, country)
        );
        const data = await response.json();
        setTimings(data.data.timings);
    };
    const handleSelect = (e) => {
        setDistrict(e.target.value);
        localStorage.setItem("district", e.target.value);
        getCityPrayerTimings(e.target.value, 'Bangladesh')
    };
    const getDistricts = async () => {
        // const response=await fetch(`https://bdapis.com/api/v1.2/districts`)
        // const data=await response.json()
        // setDistricts(data.data.sort((a, b) => a.district.localeCompare(b.district)))
        setDistricts(districtJsonData.sort((a, b) => a.district.localeCompare(b.district)));
    };
    useEffect(() => {
        getDistricts()
    }, [])
    return (
        <Dialog>
            <DialogTrigger asChild>
                <IoIosSettings size={22} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className='text-left'>সময় সেটিংস</DialogTitle>
                </DialogHeader>
                <div className="">
                    <div className="">
                        <select value={district} onChange={handleSelect} className="">
                            <option value="">Select District</option>
                            {districts.map((district, index) => (
                                <option key={index} value={district.district}>
                                    {district.district}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
