export interface Moment {
  id: number,
  title: string,
  description: string,
  image: string,
  comments: Comment[],
  createdAt: Date,
  updatedAt: Date
}
