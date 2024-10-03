"use client";
import { Pagination } from "@nextui-org/react";
import Link from "next/link";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
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

export default function CustomPagination({
  totalPages,
  currentPage,
  startIndex,
  pageSize,
  totalCount,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();

  return (
    <div className="mt-4 flex justify-between items-center">
      <div>
        Showing {startIndex + 1} to{" "}
        {Math.min(startIndex + pageSize, totalCount)} of {totalCount} entries
      </div>
      <Pagination
        showControls
        total={totalPages}
        initialPage={currentPage}
        onChange={(page) => {
          console.log(page);
          let params = new URLSearchParams(searchParams);
          params.set("page", String(page));
          router.push(`${pathname}?${params.toString()}`);
        }}
      />
    </div>
  );
}
