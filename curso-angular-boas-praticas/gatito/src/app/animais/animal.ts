export interface Animal {

  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userid: number;
}

export type Animais = Array<Animal>;
