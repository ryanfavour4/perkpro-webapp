export default function CandleChartTrendFill({ className }: { className?: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
        className={className}
      >
        <path fill="currentColor" d="M1 0H0v15h15v-1H1z"></path>
        <path
          fill="currentColor"
          d="M8 0v3H7v5h3V3H9V0zM3 4v1H2v5h1v2h1v-2h1V5H4V4zm9 2h1V4h1v2h1v5h-1v2h-1v-2h-1z"
        ></path>
      </svg>
    </>
  );
}
