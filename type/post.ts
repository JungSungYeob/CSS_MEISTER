export type PostData = {
  title: string;
  date: string;
  category: string;
};

export type Post = {
  data: PostData;
  content: string;
  slug: string;
};
