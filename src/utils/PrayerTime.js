class PrayerTime{
    constructor(){
        this.geoApiUrl = 'https://api.aladhan.com/v1/timings'
        this.cityApiUrl = 'https://api.aladhan.com/v1/timingsByCity'
    }
    static getGeoApiUrl(latitude, longitude) {
        return `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
    }
    static getCityApiUrl(city, country) {
        return `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`
    }
}

export default PrayerTime;