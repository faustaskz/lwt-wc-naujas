export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tag?: string;
}

export const programs: Program[] = [
  {
    id: "wat-usa",
    title: "Work and Travel USA",
    description: "Populiariausia vasaros programa studentams JAV. Dirbk, keliauk ir pažink Amerikos kultūrą.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800",
    link: "/programos/work-and-travel-usa",
    tag: "Populiariausia"
  },
  {
    id: "camp-counselor",
    title: "Camp Counselor USA",
    description: "Praleisk vasarą dirbdamas vaikų stovyklose JAV. Puiki galimybė tobulinti anglų kalbą ir lyderystės įgūdžius.",
    image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&q=80&w=800",
    link: "/programos/camp-counselor-usa"
  },
  {
    id: "internships",
    title: "Praktikos užsienyje",
    description: "Profesinė patirtis tarptautinėse kompanijose. Pradėk savo karjerą globaliai.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    link: "/programos/praktikos"
  },
  {
    id: "working-holiday",
    title: "Working Holiday",
    description: "Metų trukmės nuotykis Australijoje, Naujojoje Zelandijoje ar Kanadoje.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
    link: "/programos/working-holiday"
  },
  {
    id: "au-pair",
    title: "Au Pair programos",
    description: "Gyvenk šeimoje, padėk prižiūrėti vaikus ir pažink vietinę kultūrą iš arti.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    link: "/programos/au-pair"
  },
  {
    id: "other-opportunities",
    title: "Kitos galimybės",
    description: "Savanoriavimas, kalbų kursai ir kiti tarptautiniai projektai jaunimui.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    link: "/programos"
  }
];

export const testimonials = [
  {
    name: "Mantas J.",
    program: "Work and Travel USA",
    text: "Tai buvo geriausia mano gyvenimo vasara. Pamačiau Grand Canyon, susiradau draugų iš viso pasaulio ir užsidirbau kelionėms.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Eglė P.",
    program: "Praktika Vokietijoje",
    text: "Profesinė patirtis, kurią gavau, padėjo man iškart po studijų susirasti svajonių darbą Lietuvoje.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Tomas R.",
    program: "Camp Counselor USA",
    text: "Darbas su vaikais stovykloje išmokė kantrybės ir suteikė pasitikėjimo savimi. Rekomenduoju kiekvienam!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  }
];

export const faqs = [
  {
    question: "Kas gali dalyvauti Work and Travel USA programoje?",
    answer: "Programoje gali dalyvauti nuolatinių studijų studentai, turintys bent vidutines anglų kalbos žinias ir norintys praleisti vasarą JAV."
  },
  {
    question: "Kada geriausia pradėti registraciją?",
    answer: "Rekomenduojame registruotis kuo anksčiau (rugsėjo-lapkričio mėnesiais), kad turėtumėte didžiausią darbo vietų pasirinkimą ir geriausias kainas."
  },
  {
    question: "Ar organizuojate konsultacijas?",
    answer: "Taip, vedame tiek grupines, tiek individualias konsultacijas gyvai arba nuotoliniu būdu. Jos yra visiškai nemokamos."
  }
];
