/** Волнистая «речная» линия-разделитель между секциями. */
export default function RiverLine() {
  return (
    <div className="riverline" aria-hidden="true">
      <svg viewBox="0 0 1440 46" preserveAspectRatio="none">
        <path d="M0 23 C 120 8, 240 38, 360 23 S 600 8, 720 23 S 960 38, 1080 23 S 1320 8, 1440 23" />
      </svg>
    </div>
  );
}
