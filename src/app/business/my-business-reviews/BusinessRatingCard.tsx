import React from "react";
import { prisma } from "../../../../prisma/prisma";

type Props = {
  session: any;
};

const BusinessRatingCard = async ({ session }: Props) => {
  const averageRatingData = await prisma.review.aggregate({
    where: {
      company_id: Number(session.user.id),
      // review_status:"Active"
    },
    _avg: {
      review_rating: true,
    },
    _count: {
      _all: true,
    },
  });
  // console.log(averageRatingData);

  const ratingCounts = await prisma.review.groupBy({
    by: ["review_rating"],
    where: {
      company_id: Number(session.user.id), // Assuming `company_id` is the foreign key in the `reviews` model
      // review_status: "Active",
    },
    _count: {
      review_rating: true,
    },
  });
  // console.log(ratingCounts);

  const percentages = ratingCounts.map((group) => {
    const percentage =
      (group._count.review_rating / averageRatingData._count._all) * 100;
    return {
      rating: group.review_rating,
      percentage: percentage.toFixed(2), // To keep it with two decimal points
    };
  });

  // console.log(percentages);

  return (
    <div className="text-center">
      <div className="text-6xl font-bold">
        {averageRatingData._avg.review_rating?.toFixed(1) || "0.0"}
      </div>
      <div className="text-gray-500">{`( ${
        averageRatingData._count._all || "0"
      } Reviews )`}</div>
      <div className="mt-4">
        <ul>
          {[5, 4, 3, 2, 1].map((item, index) => {
            const rating = percentages.find((p) => p.rating === item);
            return (
              <li key={index} className="flex items-center justify-start gap-2">
                <p className="font-bold text-gray-500">{item}</p>
                <div className="flex-1 min-h-2 rounded-lg bg-primary_dark/15 p-1 shadow-inner">
                  <div
                    className={`min-h-2 rounded-lg ${
                      rating ? "bg-blue-500" : "bg-primary_dark/15"
                    }`}
                    title={`${rating?.percentage}%` || "0%"}
                    style={{
                      maxWidth: `${
                        rating
                          ? `${Math.round(
                              Number(rating.percentage)
                            ).toString()}%`
                          : "0%"
                      }`,
                    }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BusinessRatingCard;

export const BusinessCardLoading = () => {
  return (
    <div className="text-center">
      <div className="text-6xl font-bold min-h-20 min-w-20 animate-pulse bg-primary_dark/15 rounded-3xl"></div>
      <div className="bg-primary_dark/15 min-h-2 max-w-20 mx-auto animate-pulse mt-2 rounded-2xl"></div>
      <div className="mt-4">
        <ul>
          {[5, 4, 3, 2, 1].map((item, index) => {
            return (
              <li key={index} className="flex items-center justify-start gap-2">
                <p className="font-bold text-gray-500">{item}</p>
                <div className="flex-1 min-h-4 rounded-lg bg-primary_dark/15 animate-pulse p-1 shadow-inner"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
