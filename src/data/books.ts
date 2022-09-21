export interface Book {
  title: string;
  author: string[];
  audioBookNarrator: string[] | "";
  publishedYear: number;
  setting: Setting[];
  genre: Genres[];
  age: Ages;
  type: BookType;
  pages: number;
  medium: Medium;
  rating: number;
  dateStarted: string;
  dateFinished: string;
  dnfDate: string;
  progress: Progress;
  bookCoverColor: string;
  bookCoverObject: string;
  fav: boolean;
  pageProgress: number;
  tbr: boolean;
  tbrMonth: string;
  library: boolean;
  dedication: Dedication | "";
  alphabetChallenge: string | "";
}

export interface Dedication {
  text: string;
  person: string;
}

export type Person = "Mother";

export type Ages =
  | "Young Adult"
  | "New Adult"
  | "Adult"
  | "Middle Grade"
  | "Childrens";

export type Setting =
  | ""
  | "California"
  | "Canada"
  | "Egypt"
  | "Fictional"
  | "Georgia (USA)"
  | "Louisiana"
  | "London"
  | "Maryland"
  | "Mexico"
  | "Minnesota"
  | "New York City"
  | "New York State"
  | "Philadelphia"
  | "South Korea"
  | "Space"
  | "United Kingdom"
  | "United States"
  | "Washington, DC"
  | "Asia";

export type Genres =
  | "Alternate History"
  | "Africa"
  | "Afrofuturism"
  | "Asia"
  | "Biography"
  | "Black"
  | "China"
  | "Crime"
  | "Dystopia"
  | "Fairy Tale"
  | "Fantasy"
  | "Feminism"
  | "Health"
  | "Historical Fiction"
  | "History"
  | "Horror"
  | "Humor"
  | "Korea"
  | "LGBTQIA+"
  | "Magic"
  | "Magical Realism"
  | "Music"
  | "Mystery"
  | "Mythology"
  | "Psychology"
  | "Race"
  | "Retelling"
  | "Romance"
  | "Science Fiction"
  | "Short Stories"
  | "Slavery"
  | "Social Justice"
  | "Space"
  | "Thriller"
  | "Time Travel"
  | "True Crime"
  | "Vampires"
  | "War"
  | "Werewolves"
  | "Western"
  | "Witches";

export type BookType = "Fiction" | "Non-Fiction";

export type Medium = "Physical" | "E-Book" | "Audio" | "Physical and Audio";

export type Progress = "finished" | "started" | "dnf" | "not started";

export const bookData: Book[] = [
  {
    title: "She Came to Slay: The Life and Times of Harriet Tubman",
    author: ["Erica Armstrong Dunbar"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United States"],
    genre: [
      "History",
      "Biography",
      "Feminism",
      "Race",
      "Slavery",
      "Black",
      "War"
    ],
    age: "Adult",
    type: "Non-Fiction",
    pages: 157,
    medium: "Physical",
    rating: 4.5,
    dateStarted: "12/18/2020",
    dateFinished: "02/07/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Tan",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: "S"
  },
  {
    title: "Cinderella Is Dead",
    author: ["Kalynn Bayron"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "LGBTQIA+",
      "Retelling",
      "Fairy Tale",
      "Dystopia",
      "Romance",
      "Black"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 389,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/07/2021",
    dateFinished: "02/08/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Purple",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: "C"
  },
  {
    title: "I'm Not Dying with You Tonight",
    author: ["Kimberly Jones", "Gilly Segal"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United States", "Georgia (USA)"],
    genre: ["Race", "Social Justice", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 247,
    medium: "Physical",
    rating: 4,
    dateStarted: "02/09/2021",
    dateFinished: "02/09/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Black",
    bookCoverObject: "Face",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: "I"
  },
  {
    title: "The Year of the Witching",
    author: ["Alexis Henderson"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Horror",
      "Witches",
      "Feminism",
      "Historical Fiction",
      "Race",
      "Black"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 359,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/09/2021",
    dateFinished: "02/11/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Gray",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: "Y"
  },
  {
    title: "Monday's Not Coming",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [""],
    publishedYear: 2018,
    setting: ["United States", "Washington, DC"],
    genre: ["Mystery", "Black", "Crime", "Psychology"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/11/2021",
    dateFinished: "02/12/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Red",
    bookCoverObject: "Woman",
    fav: true,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: "M"
  },
  {
    title: "Uprooted",
    author: ["Naomi Novik"],
    audioBookNarrator: [""],
    publishedYear: 2015,
    setting: ["Fictional"],
    genre: ["Fantasy", "Romance", "Fairy Tale", "Retelling"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/11/2021",
    dateFinished: "",
    dnfDate: "02/16/2021",
    progress: "dnf",
    bookCoverColor: "Yellow",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 6,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Full Disclosure",
    author: ["Camryn Garrett"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United States", "California"],
    genre: ["LGBTQIA+", "Romance", "Health", "Mystery", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 290,
    medium: "E-Book",
    rating: 2.5,
    dateStarted: "02/12/2021",
    dateFinished: "02/14/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: "F"
  },
  {
    title: "The Five: The Untold Lives of the Women Killed by Jack the Ripper",
    author: ["Hallie Rubenhold"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United Kingdom", "London"],
    genre: ["History", "True Crime", "Feminism", "Mystery", "Biography"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 333,
    medium: "E-Book",
    rating: 4.5,
    dateStarted: "01/30/2021",
    dateFinished: "02/20/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "The First Sister",
    author: ["Linden Lewis"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional", "Space"],
    genre: ["Science Fiction", "Fantasy", "LGBTQIA+", "Space"],
    age: "Adult",
    type: "Fiction",
    pages: 352,
    medium: "Physical",
    rating: 0,
    dateStarted: "02/14/2021",
    dateFinished: "",
    dnfDate: "",
    progress: "started",
    pageProgress: 9,
    bookCoverColor: "Gold",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "The Testaments",
    author: ["Margaret Atwood"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United States", "Canada"],
    genre: ["Dystopia", "Feminism"],
    age: "Adult",
    type: "Fiction",
    pages: 422,
    medium: "Physical",
    rating: 0,
    dateStarted: "11/29/2020",
    dateFinished: "",
    dnfDate: "09/09/2021",
    progress: "dnf",
    pageProgress: 40,
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "The Good Luck Girls",
    author: ["Charlotte Nicole Davis"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Fantasy", "Historical Fiction", "LGBTQIA+", "Western", "Dystopia"],
    age: "Young Adult",
    type: "Fiction",
    pages: 352,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/15/2021",
    dateFinished: "",
    dnfDate: "09/23/2021",
    progress: "dnf",
    pageProgress: 13,
    bookCoverColor: "Brown",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title:
      "Maybe You Should Talk to Someone: A Therapist, Her Therapist, and Our Lives Revealed",
    author: ["Lori Gottlieb"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United States", "California"],
    genre: ["Biography", "Psychology"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 415,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/17/2021",
    dateFinished: "",
    dnfDate: "",
    progress: "started",
    pageProgress: 30,
    bookCoverColor: "Blue",
    bookCoverObject: "Tissue",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Gods of Jade and Shadow",
    author: ["Silvia Moreno-Garcia"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Mexico"],
    genre: ["Fantasy", "Historical Fiction", "Mythology", "Magical Realism"],
    age: "Adult",
    type: "Fiction",
    pages: 338,
    medium: "E-Book",
    rating: 3.5,
    dateStarted: "04/12/2021",
    dateFinished: "05/01/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Blue",
    bookCoverObject: "Tissue",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: "G"
  },
  {
    title: "Kim Jiyoung, Born 1982",
    author: ["Cho Nam-Joo"],
    audioBookNarrator: [""],
    publishedYear: 2016,
    setting: ["South Korea"],
    genre: ["Dystopia", "Feminism", "Asia", "Korea"],
    age: "Adult",
    type: "Fiction",
    pages: 163,
    medium: "Physical",
    rating: 3.5,
    dateStarted: "08/09/2021",
    dateFinished: "08/23/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: "K"
  },
  {
    title: "The Grace Year",
    author: ["Kim Liggett"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Dystopia", "Fantasy", "Feminism"],
    age: "Young Adult",
    type: "Fiction",
    pages: 404,
    medium: "Physical",
    rating: 3,
    dateStarted: "08/23/2021",
    dateFinished: "08/24/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Pink",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Ring Shout",
    author: ["P. Djèlí Clark"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional", "Georgia (USA)"],
    genre: [
      "Fantasy",
      "Horror",
      "Historical Fiction",
      "Race",
      "Black",
      "Alternate History"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 185,
    medium: "E-Book",
    rating: 5,
    dateStarted: "08/24/2021",
    dateFinished: "08/27/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Red",
    bookCoverObject: "Person",
    fav: true,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: "R"
  },
  {
    title: "Boyfriend Material",
    author: ["Alexis Hall"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["United Kingdom", "London"],
    genre: ["LGBTQIA+", "Romance", "Humor"],
    age: "Adult",
    type: "Fiction",
    pages: 185,
    medium: "E-Book",
    rating: 3,
    dateStarted: "08/27/2021",
    dateFinished: "08/29/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Red",
    bookCoverObject: "Two People",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: "B"
  },
  {
    title: "Red, White & Royal Blue",
    author: ["Casey McQuiston"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United Kingdom", "United States", "Washington, DC", "London"],
    genre: ["LGBTQIA+", "Romance"],
    age: "New Adult",
    type: "Fiction",
    pages: 418,
    medium: "Physical",
    rating: 0,
    dateStarted: "08/29/2021",
    dateFinished: "",
    dnfDate: "09/17/2021",
    progress: "dnf",
    pageProgress: 42,
    bookCoverColor: "Pink",
    bookCoverObject: "Two People",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "The Vanishing Half",
    author: ["Brit Bennett"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: [
      "United States",
      "Louisiana",
      "California",
      "New York City",
      "Washington, DC",
      "Minnesota"
    ],
    genre: ["Historical Fiction", "Race", "Black"],
    age: "Adult",
    type: "Fiction",
    pages: 343,
    medium: "E-Book",
    rating: 5,
    dateStarted: "08/29/2021",
    dateFinished: "09/13/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Purple",
    bookCoverObject: "Two Women",
    fav: true,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: "V"
  },
  {
    title: "Raybearer",
    author: ["Jordan Ifueko"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: ["Fantasy", "LGBTQIA+", "Magic", "Africa", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 368,
    medium: "E-Book",
    rating: 4.5,
    dateStarted: "09/13/2021",
    dateFinished: "09/19/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Gold",
    bookCoverObject: "Woman's Face",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Allegedly",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [""],
    publishedYear: 2017,
    setting: ["New York City", "United States"],
    genre: ["Mystery", "Black", "Psychology", "Crime"],
    age: "Young Adult",
    type: "Fiction",
    pages: 387,
    medium: "Physical",
    rating: 4,
    dateStarted: "09/22/2021",
    dateFinished: "09/24/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "White",
    bookCoverObject: "Girl",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: "A"
  },
  {
    title: "Let Me Hear a Rhyme",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [
      "Korey Jackson, Nile Bullock, Adenrele Ojo, Adam Lazarre-White"
    ],
    publishedYear: 2019,
    setting: ["United States", "New York City"],
    genre: ["Mystery", "Black", "Psychology", "Crime", "Music"],
    age: "Young Adult",
    type: "Fiction",
    pages: 377,
    medium: "Physical and Audio",
    rating: 4,
    dateStarted: "09/24/2021",
    dateFinished: "06/18/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Black",
    bookCoverObject: "Three People",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: {
      text:
        "For my cousin Sherrill Lavonne Bryant, who introduced me to hip-hop, bamboo earrings, Martin, Yo-Yo, En Vouge, and Jodeci. For the hustler in front of my autie's building who taught me how to move in a room full of vultures. For Brooklyn, home no matter where I go.",
      person: "Family, Place"
    },
    alphabetChallenge: "L"
  },
  {
    title: "Mexican Gothic",
    author: ["Silvia Moreno-Garcia"],
    audioBookNarrator: [""],
    publishedYear: 0,
    setting: [""],
    genre: ["Horror"],
    age: "Adult",
    type: "Fiction",
    pages: 301,
    medium: "Physical",
    rating: 0,
    dateStarted: "10/12/2021",
    dateFinished: "",
    dnfDate: "",
    progress: "started",
    pageProgress: 5,
    bookCoverColor: "",
    bookCoverObject: "",
    fav: false,
    tbr: true,
    tbrMonth: "November",
    library: false,
    dedication: { text: "Para mi madre", person: "Mother" },
    alphabetChallenge: ""
  },
  {
    title: "The Afterlife of Holly Chase",
    author: ["Cynthia Hand"],
    audioBookNarrator: [""],
    publishedYear: 0,
    setting: [""],
    genre: ["Retelling"],
    age: "Young Adult",
    type: "Fiction",
    pages: 0,
    medium: "Physical",
    rating: 0,
    dateStarted: "",
    dateFinished: "",
    dnfDate: "",
    progress: "not started",
    pageProgress: 0,
    bookCoverColor: "",
    bookCoverObject: "",
    fav: false,
    tbr: true,
    tbrMonth: "December",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Grown",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: ["Joniece Abbott-Pratt"],
    publishedYear: 2020,
    setting: ["New York City"],
    genre: ["Mystery", "Black", "Thriller"],
    age: "Young Adult",
    type: "Fiction",
    pages: 384,
    medium: "Audio",
    rating: 5,
    dateStarted: "06/16/2022",
    dateFinished: "06/17/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Yellow",
    bookCoverObject: "Woman",
    fav: true,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Such A Fun Age",
    author: ["Kiley Reid"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Philadelphia", "New York City"],
    genre: ["Race", "Black"],
    age: "Adult",
    type: "Fiction",
    pages: 310,
    medium: "E-Book",
    rating: 5,
    dateStarted: "09/30/2021",
    dateFinished: "10/03/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Blue",
    bookCoverObject: "Text",
    fav: false,
    tbr: true,
    tbrMonth: "October",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Blackout",
    author: [
      "Dhonielle Clayton",
      "Tiffany D. Jackson",
      "Nic Stone",
      "Angie Thomas",
      "Ashley Woodfolk",
      "Nicola Yoon"
    ],
    audioBookNarrator: [""],
    publishedYear: 2021,
    setting: ["United States", "New York City"],
    genre: ["Short Stories", "Black", "LGBTQIA+", "Romance"],
    age: "Young Adult",
    type: "Fiction",
    pages: 256,
    medium: "E-Book",
    rating: 3.5,
    dateStarted: "09/28/2021",
    dateFinished: "10/12/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 10,
    bookCoverColor: "Black",
    bookCoverObject: "Bridge",
    fav: false,
    tbr: true,
    tbrMonth: "October",
    library: true,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Crier's War",
    author: ["Nina Varela"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Fantasy", "Romance", "LGBTQIA+", "Science Fiction", "Dystopia"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "E-Book",
    rating: 5,
    dateStarted: "10/05/2021",
    dateFinished: "10/16/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Gray",
    bookCoverObject: "Words",
    fav: false,
    tbr: true,
    tbrMonth: "October",
    library: true,
    dedication: {
      text: "For the queer readers. You deserve every adventure.",
      person: "LGBTQIA+"
    },
    alphabetChallenge: ""
  },
  {
    title: "Iron Heart",
    author: ["Nina Varela"],
    audioBookNarrator: ["Kim Mai Guest"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Romance",
      "LGBTQIA+",
      "Science Fiction",
      "Dystopia",
      "War"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 400,
    medium: "Physical and Audio",
    rating: 4,
    dateStarted: "10/17/2021",
    dateFinished: "07/17/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Gold",
    bookCoverObject: "Words",
    fav: false,
    tbr: false,
    tbrMonth: "November",
    library: false,
    dedication: {
      text: "",
      person: ""
    },
    alphabetChallenge: ""
  },
  {
    title: "Written in the Stars",
    author: ["Alexandria Bellefleur"],
    audioBookNarrator: [""],
    publishedYear: 0,
    setting: [""],
    genre: ["Romance"],
    age: "Young Adult",
    type: "Fiction",
    pages: 0,
    medium: "E-Book",
    rating: 0,
    dateStarted: "12/06/2021",
    dateFinished: "",
    dnfDate: "",
    progress: "started",
    pageProgress: 5,
    bookCoverColor: "",
    bookCoverObject: "",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Dread Nation",
    author: ["Justina Ireland"],
    audioBookNarrator: [""],
    publishedYear: 2018,
    setting: ["United States"],
    genre: [
      "Fantasy",
      "Horror",
      "Historical Fiction",
      "Race",
      "Black",
      "Alternate History",
      "War"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 455,
    medium: "E-Book",
    rating: 4,
    dateStarted: "10/16/2021",
    dateFinished: "10/22/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Brown",
    bookCoverObject: "Woman",
    fav: false,
    tbr: true,
    tbrMonth: "October",
    library: true,
    dedication: {
      text: "For all the colored girls. I see you. <3",
      person: "Black Girls"
    },
    alphabetChallenge: "D"
  },
  {
    title: "Ace of Spades",
    author: ["Faridah Àbíké-Íyímídé"],
    audioBookNarrator: ["Tapiwa Mugweni"],
    publishedYear: 2021,
    setting: ["Fictional"],
    genre: ["Horror", "Thriller", "LGBTQIA+", "Black", "Race"],
    age: "Young Adult",
    type: "Fiction",
    pages: 470,
    medium: "Physical and Audio",
    rating: 5,
    dateStarted: "06/18/2022",
    dateFinished: "06/19/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Red",
    bookCoverObject: "Two People",
    fav: false,
    tbr: true,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Redemptor",
    author: ["Jordan Ifueko"],
    audioBookNarrator: ["Joniece Abbott-Pratt"],
    publishedYear: 2021,
    setting: ["Fictional"],
    genre: ["Fantasy", "LGBTQIA+", "Magic", "Africa", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 336,
    medium: "Physical and Audio",
    rating: 3.5,
    dateStarted: "06/20/2022",
    dateFinished: "06/28/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Purple",
    bookCoverObject: "Woman's Face",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "How Long 'til Black Future Month?",
    author: ["N.K. Jemisin"],
    audioBookNarrator: [
      "Shayna Small, Gail Nelson-Holgate, Robin Ray Eller, Ron Butler, Kevin Stillwell, Je Nie Fleming, Jeanette Illidge"
    ],
    publishedYear: 2018,
    setting: ["Fictional", "United States", "Space"],
    genre: [
      "Fantasy",
      "LGBTQIA+",
      "Magic",
      "Short Stories",
      "Black",
      "Science Fiction",
      "Afrofuturism"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 400,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/07/2022",
    dateFinished: "07/09/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Black",
    bookCoverObject: "Woman's Face",
    fav: true,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: "H"
  },
  {
    title: "Bloodchild and Other Stories",
    author: ["Octavia E. Butler"],
    audioBookNarrator: ["Janina Edwards"],
    publishedYear: 1995,
    setting: ["Fictional", "United States", "Space"],
    genre: [
      "LGBTQIA+",
      "Short Stories",
      "Black",
      "Science Fiction",
      "Afrofuturism",
      "Horror"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 214,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/09/2022",
    dateFinished: "07/10/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Black",
    bookCoverObject: "Words",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Iron Widow",
    author: ["Xiran Jay Zhao"],
    audioBookNarrator: ["Rong Fu"],
    publishedYear: 2021,
    setting: ["Fictional"],
    genre: [
      "LGBTQIA+",
      "Fantasy",
      "Asia",
      "Science Fiction",
      "Romance",
      "Historical Fiction",
      "War"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 394,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "07/13/2022",
    dateFinished: "07/16/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Red",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Binti",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2015,
    setting: ["Fictional", "Space"],
    genre: ["Short Stories", "Science Fiction", "Black", "Afrofuturism"],
    age: "Adult",
    type: "Fiction",
    pages: 96,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/16/2022",
    dateFinished: "07/16/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Black",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "This Poison Heart",
    author: ["Kalynn Bayron"],
    audioBookNarrator: ["Jordan Cobb"],
    publishedYear: 2021,
    setting: ["New York City", "United States", "New York State"],
    genre: ["Fantasy", "LGBTQIA+", "Retelling", "Black", "Mythology"],
    age: "Young Adult",
    type: "Fiction",
    pages: 384,
    medium: "Audio",
    rating: 4,
    dateStarted: "07/16/2022",
    dateFinished: "07/19/2022",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Green",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "This Wicked Fate",
    author: ["Kalynn Bayron"],
    audioBookNarrator: ["Jordan Cobb"],
    publishedYear: 2022,
    setting: ["United States", "New York State"],
    genre: ["Fantasy", "LGBTQIA+", "Retelling", "Black", "Mythology"],
    age: "Young Adult",
    type: "Fiction",
    pages: 320,
    medium: "Audio",
    rating: 4,
    dateStarted: "07/19/2022",
    dateFinished: "07/27/2022",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Purple",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "The Poppy War",
    author: ["R.F. Kuang"],
    audioBookNarrator: ["Emily Woo Zeller"],
    publishedYear: 2018,
    setting: ["Fictional", "Asia"],
    genre: ["Fantasy", "Horror", "Retelling", "China", "Magic", "War"],
    age: "Adult",
    type: "Fiction",
    pages: 527,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/28/2022",
    dateFinished: "07/30/2022",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "White",
    bookCoverObject: "Woman",
    fav: true,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "The Dragon Republic",
    author: ["R.F. Kuang"],
    audioBookNarrator: ["Emily Woo Zeller"],
    publishedYear: 2019,
    setting: ["Fictional", "Asia"],
    genre: ["Fantasy", "Horror", "Retelling", "China", "Magic", "War"],
    age: "Adult",
    type: "Fiction",
    pages: 658,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/30/2022",
    dateFinished: "08/01/2022",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "White",
    bookCoverObject: "Dragon",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "The Burning God",
    author: ["R.F. Kuang"],
    audioBookNarrator: ["Emily Woo Zeller"],
    publishedYear: 2020,
    setting: ["Fictional", "Asia"],
    genre: ["Fantasy", "Horror", "Retelling", "China", "Magic", "War"],
    age: "Adult",
    type: "Fiction",
    pages: 654,
    medium: "Audio",
    rating: 5,
    dateStarted: "08/01/2022",
    dateFinished: "08/04/2022",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "White",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "The Gilded Ones",
    author: ["Namina Forna"],
    audioBookNarrator: ["Shayna Small"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: ["Fantasy", "Horror", "Magic", "War", "Science Fiction"],
    age: "Young Adult",
    type: "Fiction",
    pages: 432,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "08/08/2022",
    dateFinished: "08/13/2022",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Green",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "The Unkindness of Ghosts",
    author: ["Rivers Solomon"],
    audioBookNarrator: ["Cherise Boothe"],
    publishedYear: 2017,
    setting: ["Space", "Fictional"],
    genre: ["Science Fiction", "Space", "Race", "Dystopia"],
    age: "Adult",
    type: "Fiction",
    pages: 432,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/13/2022",
    dateFinished: "08/16/2022",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "",
    bookCoverObject: "",
    fav: false,
    pageProgress: 0,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: "U"
  },
  {
    title: "Kindred",
    author: ["Octavia E. Butler"],
    audioBookNarrator: ["Kim Staunton"],
    publishedYear: 1979,
    setting: ["United States", "Maryland", "California"],
    genre: [
      "Black",
      "Science Fiction",
      "Time Travel",
      "Horror",
      "Race",
      "History",
      "Slavery"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 287,
    medium: "Audio",
    rating: 5,
    dateStarted: "08/18/2022",
    dateFinished: "08/20/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Orange",
    bookCoverObject: "Woman",
    fav: true,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "A Master of Djinn",
    author: ["P. Djèlí Clark"],
    audioBookNarrator: ["Suehyla El-Attar"],
    publishedYear: 2021,
    setting: ["Egypt"],
    genre: ["Science Fiction", "Magic", "Horror", "Race", "History", "Mystery"],
    age: "Adult",
    type: "Fiction",
    pages: 392,
    medium: "Audio",
    rating: 4,
    dateStarted: "08/20/2022",
    dateFinished: "09/02/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Brown",
    bookCoverObject: "Building",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Binti: Home",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2017,
    setting: ["Fictional", "Space"],
    genre: ["Short Stories", "Science Fiction", "Black", "Afrofuturism"],
    age: "Adult",
    type: "Fiction",
    pages: 176,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "09/03/2022",
    dateFinished: "09/03/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  },
  {
    title: "Binti: Night Masquerade",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2018,
    setting: ["Fictional", "Space"],
    genre: ["Short Stories", "Science Fiction", "Black", "Afrofuturism"],
    age: "Adult",
    type: "Fiction",
    pages: 208,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "09/03/2022",
    dateFinished: "09/04/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Brown",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" },
    alphabetChallenge: ""
  }
];
