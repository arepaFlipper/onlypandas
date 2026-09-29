export type User = {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  isSubscribed: boolean;
};

export type Like = {
  id: string;
  postId: string;
  userId: string;
};

export type Comment = {
  id: string;
  text: string;
  postId: string;
  userId: string;
  user: User;
  createdAt: Date;
};

export type PostWithComments = {
  id: string;
  text: string;
  mediaUrl: string | null;
  mediaType: string | null;
  isPublic: boolean;
  likes: number;
  userId: string;
  createdAt: Date;
  comments: Comment[];
  likesList: Like[];
};

export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  isArchived: boolean;
};

export type ShippingAddress = {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type DemoOrder = {
  id: string;
  product: Product;
  isPaid: boolean;
  size: string | null;
  shippingAddress: ShippingAddress | null;
};
