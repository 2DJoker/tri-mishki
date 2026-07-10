import { useBooking } from "../booking";
import type { Bath } from "../data/baths";
import Ph from "./Ph";

export default function BathCard({ bath }: { bath: Bath }) {
  const { open } = useBooking();
  return (
    <article className="bcard reveal">
      <div className="bcard__img">
        <Ph variant={bath.ph} src={bath.img} alt={bath.name} label={bath.tag} />
      </div>
      <div className="bcard__body">
        <h3>{bath.name}</h3>
        <div className="bcard__meta">
          <span>{bath.area}</span>
          <span>{bath.capFull}</span>
          <span>{bath.tag}</span>
        </div>
        <p>{bath.short}</p>
        <div className="bcard__foot">
          <div className="price">
            <b>{bath.price}</b> <span>/ час</span>
          </div>
          <button className="btn" onClick={() => open(bath.name)}>Бронь</button>
        </div>
      </div>
    </article>
  );
}
