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
  progress: Progress;
  fav: boolean;
  color: string;
}

export type Ages =
  | "Young Adult"
  | "New Adult"
  | "Adult"
  | "Middle Grade"
  | "Childrens";

export type Setting =
  | ""
  | "Atlanta"
  | "Boston"
  | "California"
  | "Canada"
  | "China"
  | "Egypt"
  | "Fictional"
  | "Florida"
  | "Georgia (USA)"
  | "Louisiana"
  | "London"
  | "Maryland"
  | "Mexico"
  | "Minnesota"
  | "New York City"
  | "New York State"
  | "Nigeria"
  | "Ocean"
  | "Ohio"
  | "Philadelphia"
  | "South Africa"
  | "South Korea"
  | "Space"
  | "United Kingdom"
  | "United States"
  | "Washington, DC"
  | "Asia";

export type Genres =
  | "Academic"
  | "Alternate History"
  | "Africa"
  | "Afrofuturism"
  | "Asia"
  | "Autobiography"
  | "Biography"
  | "Black"
  | "China"
  | "Crime"
  | "Disability"
  | "Dystopia"
  | "Fairy Tale"
  | "Fantasy"
  | "Family"
  | "Feminism"
  | "Health"
  | "Historical Fiction"
  | "History"
  | "Horror"
  | "Humor"
  | "Korea"
  | "LGBTQIA+"
  | "Mafia"
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

export type Progress = "finished";

export const bookData: Book[] = [
  {
    title: "Emergency Skin",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Jason Issacs"],
    publishedYear: 2019,
    setting: ["Space", "United States"],
    genre: ["Short Stories", "Space", "Race", "Dystopia", "Science Fiction"],
    age: "Adult",
    type: "Fiction",
    pages: 38,
    medium: "Audio",
    rating: 4,
    dateStarted: "02/04/2023",
    dateFinished: "02/04/2023",
    progress: "finished",
    color: "green",
    fav: false
  },
  {
    title: "The Weight of Blood",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [
      "JD Jackson",
      "Sarah Mollo-Christensen",
      "Joy Nash",
      "Christoper Salazar",
      "Karen Malina White"
    ],
    publishedYear: 2022,
    setting: ["Georgia (USA)", "United States"],
    genre: [
      "Black",
      "Crime",
      "Academic",
      "Thriller",
      "Family",
      "Race",
      "Romance"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 416,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "02/01/2023",
    dateFinished: "02/02/2023",
    progress: "finished",
    color: "red",
    fav: false
  },
  {
    title: "Rust in the Root",
    author: ["Justina Ireland"],
    audioBookNarrator: ["Jordan Cobb"],
    publishedYear: 2022,
    setting: ["New York City", "United States", "Ohio"],
    genre: [
      "Alternate History",
      "Black",
      "Race",
      "Magic",
      "Fantasy",
      "Historical Fiction"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 448,
    medium: "Audio",
    rating: 4,
    dateStarted: "01/28/2023",
    dateFinished: "01/30/2023",
    progress: "finished",
    color: "black",
    fav: false
  },
  {
    title: "Stories from the Tenants Downstairs",
    author: ["Sidik Fofana"],
    audioBookNarrator: [
      "Joniece Abbott-Pratt",
      "Nile Bullock",
      "Sidik Fofana",
      "Dominic Hoffman",
      "DePre Owens",
      "André Santana",
      "Bahni Turpin",
      "Jade Wheeler"
    ],
    publishedYear: 2022,
    setting: ["New York City", "United States"],
    genre: ["Short Stories", "Black", "Crime", "Family"],
    age: "Adult",
    type: "Fiction",
    pages: 213,
    medium: "Audio",
    rating: 5,
    dateStarted: "01/25/2023",
    dateFinished: "01/27/2023",
    progress: "finished",
    color: "red",
    fav: false
  },
  {
    title: "Akata Witch",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Yetide Badaki"],
    publishedYear: 2011,
    setting: ["Nigeria"],
    genre: ["Science Fiction", "Black", "Magic", "Crime"],
    age: "Middle Grade",
    type: "Fiction",
    pages: 349,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "01/15/2023",
    dateFinished: "01/25/2023",
    progress: "finished",
    color: "red",
    fav: false
  },
  {
    title: "The Hundred Thousand Kingdoms",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Casaundra Freeman"],
    publishedYear: 2010,
    setting: ["Fictional"],
    genre: ["Fantasy", "Romance", "Magic", "Black", "Science Fiction", "War"],
    age: "Adult",
    type: "Fiction",
    pages: 427,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "01/13/2023",
    dateFinished: "01/15/2023",
    progress: "finished",
    color: "gold",
    fav: false
  },
  {
    title: "The World We Make",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2022,
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
    pages: 357,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "01/08/2023",
    dateFinished: "01/12/2023",
    progress: "finished",
    color: "black",
    fav: false
  },
  {
    title: "The Killing Moon",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Sarah Zimmerman"],
    publishedYear: 2012,
    setting: ["Fictional"],
    genre: ["Fantasy", "LGBTQIA+", "Magic", "Black", "Science Fiction", "War"],
    age: "Adult",
    type: "Fiction",
    pages: 418,
    medium: "Audio",
    rating: 4,
    dateStarted: "01/03/2023",
    dateFinished: "01/08/2023",
    progress: "finished",
    color: "darkblue",
    fav: false
  },
  {
    title: "Babel",
    author: ["Rebecca F. Kuang"],
    audioBookNarrator: ["Chris Lew Kum Hoi", "Billie Fulford-Brown"],
    publishedYear: 2022,
    setting: ["Fictional", "Asia", "United Kingdom", "China"],
    genre: [
      "Fantasy",
      "Horror",
      "China",
      "Magic",
      "War",
      "Race",
      "Historical Fiction",
      "Alternate History"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 545,
    medium: "Audio",
    rating: 5,
    dateStarted: "01/01/2023",
    dateFinished: "01/05/2023",
    progress: "finished",
    fav: true,
    color: "gold"
  },
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
    dateStarted: "12/28/2022",
    dateFinished: "12/30/2022",
    progress: "finished",
    color: "lightblue",
    fav: false
  },
  {
    title: "The Deep",
    author: ["Rivers Solomon"],
    audioBookNarrator: ["Daveed Diggs"],
    publishedYear: 2019,
    setting: ["Fictional", "Ocean"],
    genre: [
      "Black",
      "Race",
      "Short Stories",
      "LGBTQIA+",
      "Slavery",
      "Romance",
      "Science Fiction"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 116,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "12/24/2022",
    dateFinished: "12/28/2022",
    progress: "finished",
    color: "darkblue",
    fav: false
  },
  {
    title: "Whiteout",
    author: [
      "Dhonielle Clayton",
      "Tiffany D.Jackson",
      "Nic Stone",
      "Angie Thomas",
      "Ashley Woodfolk",
      "Nicola Yoon"
    ],
    audioBookNarrator: [
      "Nic Stone",
      "Danielle Shemaiah",
      "Shayna Small",
      "Bahni Turpin",
      "Alaska Jackson",
      "Joniece Abbott-Pratt",
      "Kevin R.Free",
      "James Fouhey",
      "Korey Jackson"
    ],
    publishedYear: 2022,
    setting: ["United States", "Georgia (USA)", "Atlanta"],
    genre: ["Black", "Romance", "LGBTQIA+"],
    age: "Young Adult",
    type: "Fiction",
    pages: 291,
    medium: "Audio",
    rating: 3,
    dateStarted: "12/22/2022",
    dateFinished: "12/24/2022",
    progress: "finished",
    color: "purple",
    fav: false
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
    dateStarted: "12/17/2022",
    dateFinished: "12/21/2022",
    progress: "finished",
    color: "green",
    fav: false
  },
  {
    title: "The Nickel Boys",
    author: ["Colson Whitehead"],
    audioBookNarrator: ["JD Jackson"],
    publishedYear: 2019,
    setting: ["United States", "Florida"],
    genre: ["Black", "Race", "Crime"],
    age: "Adult",
    type: "Fiction",
    pages: 213,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "12/15/2022",
    dateFinished: "12/16/2022",
    progress: "finished",
    color: "red",
    fav: false
  },
  {
    title: "The Underground Railroad",
    author: ["Colson Whitehead"],
    audioBookNarrator: ["Bahni Turpin"],
    publishedYear: 2016,
    setting: ["United States"],
    genre: [
      "Black",
      "Slavery",
      "History",
      "Alternate History",
      "Historical Fiction"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 306,
    medium: "Audio",
    rating: 5,
    dateStarted: "12/13/2022",
    dateFinished: "12/14/2022",
    progress: "finished",
    color: "black",
    fav: true
  },
  {
    title: "The Red Palace",
    author: ["June Hur"],
    audioBookNarrator: ["Michelle H. Lee"],
    publishedYear: 2022,
    setting: ["South Korea"],
    genre: ["Asia", "Mystery", "Health", "Crime", "Korea"],
    age: "Young Adult",
    type: "Fiction",
    pages: 336,
    medium: "Audio",
    rating: 4,
    dateStarted: "12/11/2022",
    dateFinished: "12/12/2022",
    progress: "finished",
    color: "red",
    fav: false
  },
  {
    title: "Deathless Divide",
    author: ["Justina Ireland"],
    audioBookNarrator: ["Bahni Turpin", "Jordan Cobb"],
    publishedYear: 2020,
    setting: ["United States", "California"],
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
    pages: 560,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "12/14/2022",
    dateFinished: "12/15/2022",
    progress: "finished",
    color: "black",
    fav: false
  },
  {
    title: "Get a Life, Chloe Brown",
    author: ["Talia Hibbert"],
    audioBookNarrator: ["Adjoa Andoh"],
    publishedYear: 2019,
    setting: ["United Kingdom"],
    genre: ["Romance", "Black", "Humor", "Disability", "Health"],
    age: "Adult",
    type: "Fiction",
    pages: 373,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "12/01/2022",
    dateFinished: "12/11/2022",
    progress: "finished",
    color: "pink",
    fav: false
  },
  {
    title: "Born a Crime",
    author: ["Trevor Noah"],
    audioBookNarrator: ["Trevor Noah"],
    publishedYear: 2016,
    setting: ["South Africa"],
    genre: ["Autobiography", "Black", "Africa", "Family", "Race"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 289,
    medium: "Audio",
    rating: 5,
    dateStarted: "10/07/2022",
    dateFinished: "10/09/2022",
    progress: "finished",
    color: "lightblue",
    fav: true
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
    dateStarted: "09/05/2022",
    dateFinished: "09/22/2022",
    progress: "finished",
    color: "black",
    fav: false
  },
  {
    title: "Binti: Night Masquerade",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2018,
    setting: ["Fictional", "Space"],
    genre: [
      "Short Stories",
      "Science Fiction",
      "Black",
      "Afrofuturism",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 208,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "09/03/2022",
    dateFinished: "09/04/2022",
    progress: "finished",
    color: "gold",
    fav: false
  },
  {
    title: "Binti: Home",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2017,
    setting: ["Fictional", "Space"],
    genre: [
      "Short Stories",
      "Science Fiction",
      "Black",
      "Afrofuturism",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 176,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "09/03/2022",
    dateFinished: "09/03/2022",
    progress: "finished",
    color: "darkblue",
    fav: false
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
    progress: "finished",
    color: "brown",
    fav: false
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
    progress: "finished",
    color: "black",
    fav: true
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
    progress: "finished",
    fav: false,
    color: "darkblue"
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
    progress: "finished",
    fav: false,
    color: "gold"
  },
  {
    title: "The Burning God",
    author: ["Rebecca F. Kuang"],
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
    progress: "finished",
    fav: true,
    color: "purple"
  },
  {
    title: "The Dragon Republic",
    author: ["Rebecca F. Kuang"],
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
    progress: "finished",
    fav: true,
    color: "darkblue"
  },
  {
    title: "The Poppy War",
    author: ["Rebecca F. Kuang"],
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
    progress: "finished",
    fav: true,
    color: "red"
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
    progress: "finished",
    fav: false,
    color: "purple"
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
    progress: "finished",
    fav: false,
    color: "green"
  },
  {
    title: "Binti",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2015,
    setting: ["Fictional", "Space"],
    genre: [
      "Short Stories",
      "Science Fiction",
      "Black",
      "Afrofuturism",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 96,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/16/2022",
    dateFinished: "07/16/2022",
    progress: "finished",
    color: "brown",
    fav: false
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
    progress: "finished",
    color: "orange",
    fav: false
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
      "Horror",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 214,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/09/2022",
    dateFinished: "07/10/2022",
    progress: "finished",
    color: "red",
    fav: false
  },
  {
    title: "How Long 'til Black Future Month?",
    author: ["N.K. Jemisin"],
    audioBookNarrator: [
      "Shayna Small",
      "Gail Nelson-Holgate",
      "Robin Ray Eller",
      "Ron Butler",
      "Kevin Stillwell",
      "Je Nie Fleming",
      "Jeanette Illidge"
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
      "Afrofuturism",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 400,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/07/2022",
    dateFinished: "07/09/2022",
    progress: "finished",
    color: "gold",
    fav: true
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
    progress: "finished",
    color: "purple",
    fav: false
  },
  {
    title: "Ace of Spades",
    author: ["Faridah Àbíké-Íyímídé"],
    audioBookNarrator: ["Tapiwa Mugweni"],
    publishedYear: 2021,
    setting: ["Fictional"],
    genre: ["Horror", "Thriller", "LGBTQIA+", "Black", "Race", "Academic"],
    age: "Young Adult",
    type: "Fiction",
    pages: 470,
    medium: "Physical and Audio",
    rating: 5,
    dateStarted: "06/18/2022",
    dateFinished: "06/19/2022",
    progress: "finished",
    color: "red",
    fav: false
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
    progress: "finished",
    color: "brown",
    fav: false
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
    progress: "finished",
    color: "black",
    fav: false
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
    progress: "finished",
    color: "gold",
    fav: false
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
    progress: "finished",
    fav: false,
    color: "purple"
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
    progress: "finished",
    color: "pink",
    fav: false
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
    progress: "finished",
    color: "gold",
    fav: true
  },
  {
    title: "Let Me Hear a Rhyme",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [
      "Korey Jackson",
      "Nile Bullock",
      "Adenrele Ojo",
      "Adam Lazarre-White"
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
    progress: "finished",
    color: "green",
    fav: false
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
    progress: "finished",
    color: "red",
    fav: false
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
    progress: "finished",
    color: "purple",
    fav: false
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
    progress: "finished",
    color: "darkblue",
    fav: true
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
    progress: "finished",
    color: "red",
    fav: false
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
    progress: "finished",
    color: "black",
    fav: true
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
    progress: "finished",
    color: "pink",
    fav: false
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
    progress: "finished",
    color: "red",
    fav: false
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
    progress: "finished",
    fav: false,
    color: "purple"
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
    progress: "finished",
    fav: false,
    color: "lightblue"
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
    progress: "finished",
    fav: false,
    color: "darkblue"
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
    progress: "finished",
    fav: true,
    color: "red"
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
    progress: "finished",
    fav: false,
    color: "gold"
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
    progress: "finished",
    fav: false,
    color: "red"
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
    progress: "finished",
    fav: false,
    color: "purple"
  },
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
    progress: "finished",
    fav: false,
    color: "red"
  }
];
