export const PRICING = {
  seasons: [
    { months: [1, 2, 3, 11, 12], rate: 450 },  // off-season
    { months: [4, 10],            rate: 550 },  // wiosna/jesień
    { months: [5, 9],             rate: 620 },  // maj/wrzesień
    { months: [6],                rate: 700 },  // lato wstępne
    { months: [7, 8],             rate: 850 },  // peak
  ],
  weekendSurcharge: 80, // piątek + sobota
  minNights: 2,
  maxNights: 14,
  maxGuests: 6,
} as const
