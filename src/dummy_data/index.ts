export const admin = {
  id: "admin-1",
  name: "Cristian F. Tovar",
  email: "admin@gmail.com",
  image: "https://avatar.iran.liara.run/public/boy?username=bob",
  isSubscribed: true,
};

export const user = {
  id: "user-123",
  email: "user@gmail.com",
  name: "Grace Hopper",
  image: "https://avatar.iran.liara.run/public/boy?username=john",
  isSubscribed: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const posts = [
  {
    id: "post-1",
    text: "Behind-the-scenes look at our pandas' morning routine! 🐼",
    mediaType: "image",
    mediaUrl: "/featured/featured1.jpg",
    likes: 24,
    isPublic: true,
    userId: "admin-1",
    createdAt: new Date(),
    likesList: [],
    comments: [
      {
        id: "comment-1",
        text: "This is amazing! Love the pandas 🐼",
        postId: "post-1",
        userId: "user-123",
        user: {
          id: "user-123",
          name: "Grace Hopper",
          email: "user@gmail.com",
          image: "https://avatar.iran.liara.run/public/boy?username=john",
          isSubscribed: true,
        },
        createdAt: new Date(),
      },
    ],
  },
  {
    id: "post-2",
    text: "Exclusive content: Our pandas exploring their new habitat 🌿",
    mediaType: "image",
    mediaUrl: "/featured/featured2.jpg",
    likes: 47,
    isPublic: false,
    userId: "admin-1",
    createdAt: new Date(),
    likesList: [],
    comments: [
      {
        id: "comment-2",
        text: "Incredible shot!",
        postId: "post-2",
        userId: "user-123",
        user: {
          id: "user-123",
          name: "Grace Hopper",
          email: "user@gmail.com",
          image: "https://avatar.iran.liara.run/public/boy?username=john",
          isSubscribed: true,
        },
        createdAt: new Date(),
      },
    ],
  },
  {
    id: "post-3",
    text: "Members only: Panda play session highlights 🎉",
    mediaType: "image",
    mediaUrl: "/featured/featured3.jpg",
    likes: 61,
    isPublic: false,
    userId: "admin-1",
    createdAt: new Date(),
    likesList: [],
    comments: [],
  },
];

export const products = [
  {
    id: "product-1",
    name: "Product One",
    price: 1999,
    image: "/tshirts/1.png",
    isArchived: false,
  },
  {
    id: "product-2",
    name: "Product Two",
    price: 2999,
    image: "/tshirts/2.png",
    isArchived: true,
  },
  {
    id: "product-3",
    name: "Product Three",
    price: 3999,
    image: "/tshirts/3.png",
    isArchived: false,
  },
];
