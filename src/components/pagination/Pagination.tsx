"use client";
import Link from "next/link";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from "next/navigation";

// app/components/Pagination.tsx
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  startIndex: number;
  pageSize: number;
  totalCount: number;
}

export default function Pagination({
  totalPages,
  currentPage,
  startIndex,
  pageSize,
  totalCount,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams: any = useSearchParams();
  const currentpage = Number(searchParams?.get("page")) || 1;
  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(currentpage));
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="mt-4 flex justify-between items-center">
      <div>
        Showing {startIndex + 1} to{" "}
        {Math.min(startIndex + pageSize, totalCount)} of {totalCount} entries
      </div>
      <div className="flex space-x-2">
        <Link
          href={`/business/my-listings?page=${
            currentPage === totalPages ? currentPage : currentPage - 1
          }`}
          className={`p-2 border ${
            currentPage === 1 ? "bg-gray-300" : "bg-white"
          } border-gray-300 rounded-full size-8 flex justify-center items-center text-sm`}
        >
          Prev
        </Link>
        {[...Array(totalPages)].map((_, i) => (
          <Link
            href={`/business/my-listings?page=${i + 1}`}
            key={i}
            className={`py-1 px-2 border  ${
              currentPage === i + 1 ? "bg-active_dark text-white" : "bg-white"
            } border-gray-300 rounded-full size-8 flex justify-center items-center text-sm`}
            // onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Link>
        ))}
        <Link
          href={`/business/my-listings?page=${
            currentPage === totalPages ? currentPage : currentPage + 1
          }`}
          className={`py-1 px-2 border ${
            currentPage === totalPages ? "bg-gray-300" : "bg-white"
          } border-gray-300 rounded-full size-8 flex justify-center items-center text-sm`}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
