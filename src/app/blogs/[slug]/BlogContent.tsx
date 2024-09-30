"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: string;
}

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const [toc, setToc] = useState<TocItem[]>([]);
  //   const [updatedContent, setUpdatedContent] = useState<string>("");

  useEffect(() => {
    // Function to add IDs to headings and build the TOC
    const addIdsToHeadingsAndGenerateTOC = () => {
      const headings = document.querySelectorAll<HTMLHeadingElement>(
        ".rich-text-content h1, .rich-text-content h2, .rich-text-content h3, .rich-text-content h4, .rich-text-content h5, .rich-text-content h6"
      );

      const tocArray: TocItem[] = [];

      headings.forEach((heading, index) => {
        const headingText = heading.innerText.trim();
        const uniqueId =
          headingText.toLowerCase().replace(/\s+/g, "-") || `heading-${index}`;

        // Assign the ID to the heading element
        heading.id = uniqueId;

        // Add heading information to the TOC array
        tocArray.push({
          id: uniqueId,
          text: headingText,
          level: heading.tagName.toLowerCase(),
        });
      });

      setToc(tocArray);
    };
    const addIdsToHeadings = (): void => {
      // Get all heading elements inside the rich text editor content
      const headings: NodeListOf<HTMLHeadingElement> =
        document.querySelectorAll(
          ".rich-text-content h1, .rich-text-content h2, .rich-text-content h3, .rich-text-content h4, .rich-text-content h5, .rich-text-content h6"
        );

      headings.forEach((heading: HTMLHeadingElement, index: number) => {
        // Generate an ID from the heading text or fallback to an index-based ID
        const headingText: string = heading.innerText
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-"); // Converts spaces to dashes

        const uniqueId: string = headingText || `heading-${index}`;

        // Assign the ID to the heading element
        heading.id = uniqueId;
      });

      console.log(headings, "heading");
    };

    addIdsToHeadings();
    addIdsToHeadingsAndGenerateTOC();
  }, [content]);

  return (
    <div>
      {/* Table of Contents */}
      <nav className="table-of-contents bg-gray-200 rounded-xl p-4 my-2">
        <h2>Table of Contents</h2>
        <ul>
          {toc.map((item, index) => (
            <li
              key={index}
              className={`toc-item toc-${item.level} font-medium p-1`}
            >
              <Link href={`#${item.id}`}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Rich Text Content */}
      <div
        className="rich-text-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogContent;
