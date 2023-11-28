export interface Character {
  name: string;
  slug: string;
  house?: {
    name: string;
    slug: string;
  };
  quotes: string[];
}
