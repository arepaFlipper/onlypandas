export type ChatMessage = {
  id: string;
  text: string;
  fromMe: boolean;
  createdAt: Date;
};

export type Chat = {
  id: string;
  user: {
    name: string;
    image: string;
  };
  unread: number;
  messages: ChatMessage[];
};

const minutesAgo = (m: number) => new Date(Date.now() - m * 60_000);

// Users taken from the hardcoded lists in src/app/secret-dashboard/analytics/AnalyticsTab.tsx.
// Messages are ordered oldest → newest; the last one is the preview in the chat list.
export const chats: Chat[] = [
  {
    id: "chat-1",
    user: {
      name: "Shakira",
      image: "https://media.elcomercio.com/wp-content/uploads/2026/02/shakira-El-Comercio-1024x683.jpg",
    },
    unread: 2,
    messages: [
      { id: "m1", text: "Hola Guapo.", fromMe: false, createdAt: minutesAgo(45) },
      { id: "m2", text: "Calma calma!", fromMe: true, createdAt: minutesAgo(40) },
      { id: "m3", text: "Tus caderas no mienten 😍", fromMe: false, createdAt: minutesAgo(38) },
      { id: "m4", text: "Y las mias tampoco 💃🏻", fromMe: false, createdAt: minutesAgo(38) },
      { id: "m5", text: "Jajaja, gracias por comprar la camiseta 😅", fromMe: true, createdAt: minutesAgo(30) },
      { id: "m6", text: "La compré en talla S… para que me quede bien ajustadita 😏", fromMe: false, createdAt: minutesAgo(12) },
      { id: "m7", text: "Si algún día necesitas una barranquillera en tus videos, ya sabes dónde encontrarme 🎶", fromMe: false, createdAt: minutesAgo(9) },
      { id: "m9", text: "Aún estoy soltera 😉", fromMe: false, createdAt: minutesAgo(45) },
    ],
  },
  {
    id: "chat-2",
    user: {
      name: "Sydney Sweeney",
      image: "https://media.vanityfair.com/photos/69c9572bbc53344f43aca193/master/w_2240,c_limit/2234938362",
    },
    unread: 1,
    messages: [
      { id: "m1", text: "Just grabbed the $20 plan. Figured you were worth the upgrade 😌", fromMe: false, createdAt: minutesAgo(120) },
      { id: "m2", text: "Wow, thank you Sydney! Welcome to the bamboo club 🎋", fromMe: true, createdAt: minutesAgo(110) },
      { id: "m3", text: "Bamboo club, huh? You say the cutest things for a guy who films pandas all day 🙈", fromMe: false, createdAt: minutesAgo(100) },
      { id: "m4", text: "Pandas are great listeners. Very low drama", fromMe: true, createdAt: minutesAgo(95) },
      { id: "m5", text: "Lucky pandas. So… when's the behind-the-scenes tour? Asking for me ✨", fromMe: false, createdAt: minutesAgo(20) },
    ],
  },
  {
    id: "chat-3",
    user: {
      name: "Luisa Agudelo",
      image: "https://estaticos.elcolombiano.com/binrepository/780x570/1c0/780d565/none/11101/VOCL/luisagudelo_49955047_20260217103320.jpg",
    },
    unread: 1,
    messages: [
      { id: "m1", text: "Hey handsome, only $5 to subscribe? You're underpricing yourself 💅", fromMe: false, createdAt: minutesAgo(60 * 5) },
      { id: "m2", text: "Gotta keep it accessible for the panda fans 😄", fromMe: true, createdAt: minutesAgo(60 * 5 - 10) },
      { id: "m3", text: "Generous AND cute. Careful, I might never unsubscribe 😘", fromMe: false, createdAt: minutesAgo(60 * 4) },
      { id: "m4", text: "Sera que si aguanto el taponazo?😳", fromMe: false, createdAt: minutesAgo(60 * 4 - 5) },
    ],
  },
  {
    id: "chat-4",
    user: {
      name: "Karoline Leavitt",
      image:
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Official_portrait_of_Karoline_Leavitt%2C_2025_%28cropped%29%282%29.jpg/250px-Official_portrait_of_Karoline_Leavitt%2C_2025_%28cropped%29%282%29.jpg",
    },
    unread: 0,
    messages: [
      { id: "m1", text: "Your merch just arrived. Officially the best-dressed person in the briefing room 🐼", fromMe: false, createdAt: minutesAgo(60 * 27) },
      { id: "m2", text: "Haha, glad it fits! Thanks for the support", fromMe: true, createdAt: minutesAgo(60 * 26) },
      { id: "m3", text: "No further questions… except when's the next drop? 😉", fromMe: false, createdAt: minutesAgo(60 * 25) },
      { id: "m4", text: "Classified. But soon 🤫", fromMe: true, createdAt: minutesAgo(60 * 24) },
    ],
  },
];
