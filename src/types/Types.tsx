type Source = {
  id: string;
  name: string;
};

export type NewsT = {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  source: Source;
};
export type NewsProps = {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  source: Source;
};
export type CryptoT = {
  price: number;
  name: string;
  priceChange1h: number;
};

export type PostT = {
  title: string;
  description: string;
  postText: string;
  id?: string;
  submissionDate: number;
  topic?: string;
};

export type PostContxt = {
  posts: PostT[];
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPosts: React.Dispatch<React.SetStateAction<PostT[]>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  postText: string;
  setPostText: React.Dispatch<React.SetStateAction<string>>;
  addPost: (e: React.FormEvent) => Promise<void>;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  id?: number;
  topic: string;
};
export type Testimonials = {
  name: string;
  text: string;
  url: string;
};
