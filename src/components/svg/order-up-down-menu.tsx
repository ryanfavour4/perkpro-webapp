export default function OrderUpDownMenu({ className }: { className?: string }) {
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
          strokeWidth={2}
          d="M4 10h16M4 14h16M9 18l3 3l3-3M9 6l3-3l3 3"
        ></path>
      </svg>
    </>
  );
}
