import { IReview } from "@src/interfaces";
import { Document, ISectionOptions, Packer, Paragraph, TextRun } from "docx";

export const review2Blob = async (reviews: IReview[]): Promise<Blob> => {
  const reviewSection = reviews.flatMap((review) => {
    return [
      new Paragraph({
        children: [new TextRun(review.entityType)],
      }),
      new Paragraph({
        children: [new TextRun(review.category)],
      }),
      new Paragraph({
        children: [new TextRun(review.subCategory)],
      }),
      new Paragraph({
        children: [new TextRun(review.content)],
      }),
    ];
  });

  const sections: ISectionOptions[] = [
    {
      properties: {},
      children: reviewSection,
    },
  ];
  const doc = new Document({ sections });
  return await Packer.toBlob(doc);
};
