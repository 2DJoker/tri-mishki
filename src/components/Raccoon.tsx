import { useBooking } from "../booking";
import Ph from "./Ph";

export default function Raccoon({
  eyebrow,
  emberEyebrow = false,
  title,
  paragraphs,
  buttonLabel,
  solidButton = false,
  img = "/photos/raccoon.jpg",
  imgAlt = "Енот — резидент хутора",
  bookingLabel = "Встреча с енотом",
}: {
  eyebrow: string;
  emberEyebrow?: boolean;
  title: string;
  paragraphs: string[];
  buttonLabel: string;
  solidButton?: boolean;
  img?: string;
  imgAlt?: string;
  bookingLabel?: string;
}) {
  const { open } = useBooking();
  return (
    <section className="section">
      <div className="container">
        <div className="raccoon reveal">
          <Ph variant="wood" src={img} alt={imgAlt} />
          <div className="raccoon__body">
            <span className={`eyebrow ${emberEyebrow ? "ember" : ""}`.trim()}>{eyebrow}</span>
            <h2 className="raccoon__title">{title}</h2>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="raccoon__price">
              <button
                className={`btn ${solidButton ? "btn--solid" : ""}`.trim()}
                onClick={() => open(bookingLabel)}
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
