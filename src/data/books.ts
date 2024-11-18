export interface Book {
  title: string;
  author: string[];
  audioBookNarrator: string[] | "";
  publishedYear: number;
  setting: Setting[];
  genre: Genres[];
  age: Ages | "";
  type: BookType | "";
  pages: number;
  medium: Medium | "";
  rating: number;
  dateStarted: string;
  dateFinished: string;
  progress: Progress;
  fav: boolean;
  color: string;
  publisher: string;
  audioBookPublisher: string;
  dedication: Object;
  series: string;
}

export type Ages =
  | "Young Adult"
  | "New Adult"
  | "Adult"
  | "Middle Grade"
  | "Childrens";

export type Setting =
  | ""
  | "Africa"
  | "Alabama"
  | "Atlanta"
  | "Boston"
  | "California"
  | "Canada"
  | "Chicago"
  | "China"
  | "Colorado"
  | "Dominican Republic"
  | "Egypt"
  | "Fictional"
  | "Florida"
  | "France"
  | "Georgia (USA)"
  | "Germany"
  | "Illinois"
  | "India"
  | "Japan"
  | "Louisiana"
  | "London"
  | "Maryland"
  | "Mexico"
  | "Michigan"
  | "Minnesota"
  | "New Orleans"
  | "New York City"
  | "New York State"
  | "Nigeria"
  | "Ocean"
  | "Ohio"
  | "Philadelphia"
  | "Seattle"
  | "South America"
  | "South Africa"
  | "South Korea"
  | "Space"
  | "Texas"
  | "United Kingdom"
  | "United States"
  | "Washington, DC"
  | "Asia";

export type Genres =
  | ""
  | "Academic"
  | "Action"
  | "Adventure"
  | "Alternate History"
  | "Africa"
  | "Afrofuturism"
  | "Artificial Intelligence"
  | "Asia"
  | "Autobiography"
  | "Biography"
  | "Black"
  | "Caribbean"
  | "China"
  | "Crime"
  | "Disability"
  | "Dystopia"
  | "Experiments"
  | "Fairy Tale"
  | "Fantasy"
  | "Family"
  | "Feminism"
  | "Friendship"
  | "Graphic Novel"
  | "Health"
  | "Historical Fiction"
  | "History"
  | "Horror"
  | "Humor"
  | "Japan"
  | "Korea"
  | "Latin America"
  | "Legal"
  | "LGBTQIA+"
  | "Mafia"
  | "Magic"
  | "Magical Realism"
  | "Music"
  | "Mystery"
  | "Mythology"
  | "Native American"
  | "Novella"
  | "Pirates"
  | "Psychology"
  | "Race"
  | "Religion"
  | "Retelling"
  | "Revenge"
  | "Robot"
  | "Romance"
  | "Royal"
  | "Scandal"
  | "Science Fiction"
  | "Short Stories"
  | "Short Story Collection"
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

export type Progress = "finished" | "dnf" | "started";

export const bookData: Book[] = [
  {
    title: "The Girl Who Fell Beneath the Sea",
    author: ["Axie Oh"],
    audioBookNarrator: ["Rosa Escoda"],
    publishedYear: 2019,
    setting: ["Asia", "Fictional"],
    genre: [
      "Romance",
      "Fantasy",
      "Asia",
      "Retelling",
      "Mythology",
      "Historical Fiction"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 323,
    medium: "Audio",
    rating: 4,
    dateStarted: "04/29/2024",
    dateFinished: "05/23/2024",
    progress: "finished",
    color: "lightblue",
    fav: false,
    publisher: "Feiwel & Friends",
    audioBookPublisher: "Dreamscape Media, LLC",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "Chain-Gang All-Stars",
    author: ["Nana Kwame Adjei-Brenyah"],
    audioBookNarrator: [
      "Shayna Small",
      "Aaron Goodson",
      "Michael Crouch",
      "Lee Osorio"
    ],
    publishedYear: 2023,
    setting: ["United States"],
    genre: [
      "Black",
      "Psychology",
      "Action",
      "Race",
      "Romance",
      "Social Justice",
      "Crime",
      "Dystopia",
      "Experiments",
      "Horror",
      "Slavery",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 367,
    medium: "Audio",
    rating: 5,
    dateStarted: "06/04/2024",
    dateFinished: "07/04/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Pantheon",
    audioBookPublisher: "Random House Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "System Collapse",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2023,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Space",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 245,
    medium: "Audio",
    rating: 5,
    dateStarted: "02/15/2024",
    dateFinished: "02/18/2024",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Fugitive Telemetry",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2021,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 168,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "02/09/2024",
    dateFinished: "02/15/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Network Effect",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2020,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Space",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 350,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "01/25/2024",
    dateFinished: "02/12/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Exit Strategy",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2018,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 172,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "01/22/2024",
    dateFinished: "01/24/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Rogue Protocol",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2018,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 5,
    dateStarted: "01/18/2024",
    dateFinished: "01/22/2024",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Artificial Condition",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2018,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "12/13/2023",
    dateFinished: "12/28/2023",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Natural Beauty",
    author: ["Ling Ling Huang"],
    audioBookNarrator: ["Carolyn Kang"],
    publishedYear: 2008,
    setting: ["New York City", "United States"],
    genre: [
      "Crime",
      "Health",
      "Horror",
      "Music",
      "Academic",
      "Thriller",
      "Race",
      "China",
      "LGBTQIA+",
      "Experiments"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 272,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "12/01/2023",
    dateFinished: "12/16/2023",
    progress: "finished",
    color: "green",
    fav: false,
    publisher: "Mulholland Books",
    audioBookPublisher: "Penguin Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "All Systems Red",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2017,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "10/18/2023",
    dateFinished: "10/20/2023",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Black Sun",
    author: ["Rebecca Roanhorse"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional", "South America"],
    genre: [""],
    age: "",
    type: "",
    pages: 0,
    medium: "E-Book",
    rating: 3.5,
    dateStarted: "01/05/2023",
    dateFinished: "02/05/2023",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    },
    series: "Between Earth and Sky"
  },
  {
    title: "Jade City",
    author: ["Fonda Lee"],
    audioBookNarrator: ["Andrew Kishino"],
    publishedYear: 2017,
    setting: ["Asia", "Fictional"],
    genre: ["Asia", "Crime", "Mafia", "Magical Realism", "Fantasy", "War"],
    age: "Adult",
    type: "Fiction",
    pages: 560,
    medium: "Audio",
    rating: 4,
    dateStarted: "02/19/2023",
    dateFinished: "01/19/2023",
    progress: "finished",
    color: "green",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The City We Became",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2020,
    setting: ["New York City", "United States"],
    genre: [
      "Fantasy",
      "LGBTQIA+",
      "Magic",
      "Black",
      "Science Fiction",
      "Afrofuturism",
      "War"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 434,
    medium: "Audio",
    rating: 4,
    dateStarted: "09/05/2020",
    dateFinished: "10/17/2020",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Orbit",
    dedication: {
      to: "",
      text: ""
    },
    series: "Great Cities"
  },
  {
    title: "Red Seas Under Red Skies",
    author: ["Scott Lynch"],
    audioBookNarrator: ["Michael Page"],
    publishedYear: 2007,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Adventure",
      "Action",
      "Pirates",
      "Magic",
      "Crime",
      "Friendship"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 558,
    medium: "E-Book",
    rating: 4,
    dateStarted: "02/02/2015",
    dateFinished: "03/02/2015",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Gollancz",
    audioBookPublisher: "Tantor Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: "Gentleman Bastard"
  }
];
