export interface Message {
  _id?: string;
  text: string;
  author: string;
  createdAt?: Date;
  updatedAt?: Date;
  sending?: boolean;
}
