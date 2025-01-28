import { useState } from "react";
import { useEffect } from "react";
import PrayerTime from "../utils/PrayerTime";
import Timing from "../utils/Timing";
import { IoMdSunny } from "react-icons/io";
import useStore from "../store/appStore";
import SunTime from "../components/homepage/SunTime";
import PrayerTimes from "../components/homepage/PrayerTime";
import RestictedPrayerTimes from "../components/homepage/RestictedPrayerTimes";
import { Notice } from "../components/homepage/Notice";

export default function Index() {
  const { timings, setTimings } = useStore();
  const [timeObject, setTimeObject] = useState(null);

  const getGeoPrayerTiming = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          PrayerTime.getGeoApiUrl(latitude, longitude)
        );
        const data = await response.json();
        setTimings(data.data.timings);
      },
      (error) => {
        console.error("Error fetching geolocation: ", error);
      }
    );
  };
  const getCityPrayerTimings = async (city, country) => {
    const response = await fetch(
      PrayerTime.getCityApiUrl(city, country)
    );
    const data = await response.json();
    setTimings(data.data.timings);
  };

  useEffect(() => {
    if (localStorage.getItem("district")) {
      getCityPrayerTimings(localStorage.getItem("district"), 'Bangladesh')
    } else {
      getGeoPrayerTiming()
    }
  }, [])

  useEffect(() => {
    if (timings) {
      setTimeObject(new Timing(timings))
    }
  }, [timings])
  console.log(timeObject?.getSunTime())
  return (
    <div
      className="pt-2 space-y-3"
    >
      {
        timeObject ?
          <>
            <SunTime timeObject={timeObject} />
            <PrayerTimes timeObject={timeObject} />
            <Notice/>
            <RestictedPrayerTimes timeObject={timeObject}/>
          </>
          :
          <div className="text-center">
            <p>Loading...</p>
          </div>
      }
    </div>
  );
}
