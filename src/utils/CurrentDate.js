import moment from "moment-hijri";
import Calendar from 'date-bengali-revised';

class CurrentDate {
  static getBanglaDays(){
    return ['রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'];
  }
  static getBanglaMonths() {
    return [
      'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র',
      'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ',
      'ফাল্গুন', 'চৈত্র',
    ];
  }

  static getEnglishBanglaMonths(){
    return [
        'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
        'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর',
    ];
  }

  static getAbabicBanglaMonths(){
    return [
        "মুহররম",
        "সাফর",
        "রবিউল আওয়াল",
        "রবিউল সানি",
        "জমাদিউল আওয়াল",
        "জমাদিউল সানি",
        "রজব",
        "শাবান",
        "রামাদান",
        "শাওয়াল",
        "যুল ক্বাদ",
        "যুল হজ্জ"
      ];
  }

  static getBanglaDigits() {
    return ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  }

  static convertToBengaliNumber(number) {
    return number
      .toString()
      .split('')
      .map((digit) => this.getBanglaDigits()[parseInt(digit, 10)])
      .join('');
  }

  static dayNames() {
    const currentDayIndex = new Date().getDay()
    return this.getBanglaDays()[currentDayIndex];
  }

  static bangla() {
    const currentDate = new Date();
    const cal = new Calendar();
    const { year, month, day } = cal.fromGregorian(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
    );

    const correctedDay = day > 1 ? day - 1 : day;
    const bengaliDay = this.convertToBengaliNumber(correctedDay);
    const bengaliMonth = this.getBanglaMonths()[month - 1];
    const bengaliYear = this.convertToBengaliNumber(year);
    return `${bengaliDay} ${bengaliMonth}`;
    // return `${bengaliDay} ${bengaliMonth} ${bengaliYear}`;
}

static english() {
    const currentDate = new Date();
    const bengaliDay = this.convertToBengaliNumber(currentDate.getDate());
    const bengaliMonth = this.getEnglishBanglaMonths()[currentDate.getMonth()];
    const bengaliYear = this.convertToBengaliNumber(currentDate.getFullYear());
    return `${bengaliDay} ${bengaliMonth}`;
    // return `${bengaliDay} ${bengaliMonth} ${bengaliYear}`;
  }


  static arabic() {
    const currentDate = moment();
    
    const day = this.convertToBengaliNumber(currentDate.format("D"));

    const year = this.convertToBengaliNumber(currentDate.format("iYYYY"));

    const monthIndex = currentDate.iMonth();

    const monthArabic = this.getAbabicBanglaMonths()[monthIndex]

    return `${day} ${monthArabic}`;
    // return `${day} ${monthArabic} ${year}`;
}
}

export default CurrentDate;
