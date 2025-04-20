export default function AirPlane({ className }: { className?: string }) {
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
          strokeWidth={1.3}
          d="M13.235 3.257a1.75 1.75 0 0 1 .508 1.24v5.388l5.917 2.541a.47.47 0 0 1 .274.295l.519 1.545a.508.508 0 0 1-.6.65l-6.1-1.534l-.294 5.245l1.169.875v1.748a338 338 0 0 1-2.633-.708s-1.073.295-2.623.708v-1.748l1.17-.875l-.296-5.245l-6.099 1.535a.509.509 0 0 1-.6-.65l.519-1.546a.47.47 0 0 1 .274-.295l5.917-2.541V4.497a1.75 1.75 0 0 1 .508-1.24a1.76 1.76 0 0 1 2.47 0"
        ></path>
      </svg>
    </>
  );
}
