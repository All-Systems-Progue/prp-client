export interface IReview {
  _id?: string;
  entityType: string;
  category: string;
  subCategory: string;
  content: string;
  isFlagged?: boolean;
  createdAt?: string;
  creator?: string;
}
