import moment from "moment";
class Timing {
    constructor(timing) {
        this.timing = timing;
    }

    timeToMinutes = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    minutesToTime = (minutes) => {
        const hours = Math.floor(minutes / 60).toString().padStart(2, "0");
        const mins = (minutes % 60).toString().padStart(2, "0");
        return `${hours}:${mins}`;
    };

    getPrayersTime() {
        const fajrStart = this.timeToMinutes(this.timing.Fajr);
        const sunrise = this.timeToMinutes(this.timing.Sunrise);
        const dhuhr = this.timeToMinutes(this.timing.Dhuhr);
        const asr = this.timeToMinutes(this.timing.Asr);
        const maghrib = this.timeToMinutes(this.timing.Maghrib);
        const isha = this.timeToMinutes(this.timing.Isha);
        const sunset = this.timeToMinutes(this.timing.Sunset);

        return {
            Fajr: `${this.minutesToTime(fajrStart)} - ${this.minutesToTime(sunrise - 1)}`,
            Dhuhr: `${this.minutesToTime(dhuhr)} - ${this.minutesToTime(asr - 1)}`,
            Asr: `${this.minutesToTime(asr)} - ${this.minutesToTime(sunset - 1)}`,
            Maghrib: `${this.minutesToTime(maghrib)} - ${this.minutesToTime(maghrib + 15)}`,
            Isha: `${this.minutesToTime(isha)} - ${this.minutesToTime(sunrise)}`,
        };
    }

    getRestictedPrayersTime() {
        const fajrStart = this.timeToMinutes(this.timing.Sunrise);
        const dhuhr = this.timeToMinutes(this.timing.Dhuhr);
        const asr = this.timeToMinutes(this.timing.Sunset);

        return {
            Fajr: `${this.minutesToTime(fajrStart)} - ${this.minutesToTime(fajrStart + 15)}`,
            Dhuhr: `${this.minutesToTime(dhuhr - 6)} - ${this.minutesToTime(dhuhr)}`,
            Asr: `${this.minutesToTime(asr - 15)} - ${this.minutesToTime(asr)}`,
        };
    }
    getSunTime() {
        return {
            sunrise: this.timing.Sunrise,
            sunset: this.timing.Sunset
        }
    }
    getPrayerNameBangla(key) {
        switch (key) {
            case 'Sunrise':
                return 'সূর্যোদয়';
            case 'Fajr':
                return 'ফজর';
            case 'Dhuhr':
                return 'জোহর';
            case 'Asr':
                return 'আসর';
            case 'Sunset':
                return 'সূর্যাস্ত';
            case 'Maghrib':
                return 'মাগরিব';
            case 'Isha':
                return 'এশা';
            case 'Firstthird':
                return 'রাতের প্রথমাংশ';
            case 'Midnight':
                return 'মধ্যরাত';
            case 'Lastthird':
                return 'রাতের শেষাংশ';
            default:
                return 'Please insert a valid key';
        }
    }
    getPrayerTimeBangla(time) {
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return time.replace(/[0-9]/g, (digit) => bengaliDigits[digit]);
    }
    getEngBanglaDate() {
        const currentDate = new Date();
        const bengaliLocalizedDate = moment(currentDate).locale('bn').format('D MMMM YYYY');
        console.log(bengaliLocalizedDate)
    }

}

export default Timing;