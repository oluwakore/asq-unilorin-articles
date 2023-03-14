
type Category = {
  title: string
}[]

interface Article {
  coverImage: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  date: string;
  number: number;
  categories: Category;
}

