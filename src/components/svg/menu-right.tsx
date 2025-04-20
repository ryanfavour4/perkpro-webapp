export default function MenuRight({ className }: { className?: string }) {
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
          d="M4 5h12M4 12h16M4 19h8"
          color="currentColor"
        ></path>
      </svg>
    </>
  );
}
