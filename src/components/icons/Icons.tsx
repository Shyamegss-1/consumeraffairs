import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src={"/SoftWareHub-logo-2.png"}
      className="w-56 p-5"
      height={1080}
      width={1080}
      alt="logo"
      priority
    />
  );
};

export const SearchIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 17"
      className={className}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.306"
      >
        <path d="M1.125 9.386a5.919 5.919 0 1 0 10.894-4.63 5.919 5.919 0 0 0-10.894 4.63ZM10.757 11.256l4.59 4.59" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ProfileIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        d="M8 .5A4.313 4.313 0 1 0 8 9.127 4.313 4.313 0 0 0 8 .5Zm0 1.125a3.185 3.185 0 0 1 3.188 3.188A3.185 3.185 0 0 1 8 8a3.185 3.185 0 0 1-3.188-3.187A3.185 3.185 0 0 1 8 1.625Zm0 9a8.595 8.595 0 0 0-7.444 4.332.563.563 0 0 0 .225.768.529.529 0 0 0 .281.075.544.544 0 0 0 .488-.28A7.423 7.423 0 0 1 8 11.75a7.476 7.476 0 0 1 6.469 3.77c.15.262.506.355.768.205a.574.574 0 0 0 .207-.768A8.595 8.595 0 0 0 8 10.625Z"
        className="ca-icon__colored-fill"
      />
    </svg>
  );
};

export const OpenEyeIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
        fill=""
      />
      <path
        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
        fill=""
      />
    </svg>
  );
};
