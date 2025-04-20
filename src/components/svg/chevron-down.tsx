export default function ChevronDown({ className }: { className?: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className={className}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m6 9l6 6l6-6"
        ></path>
      </svg>
    </>
  );
}
