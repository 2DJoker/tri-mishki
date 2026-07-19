import { Link } from "react-router-dom";
import { useBooking } from "../booking";
import type { Bath } from "../data/baths";
import Arrow from "./Arrow";
import Ph from "./Ph";

export default function BathCard({ bath }: { bath: Bath }) {
  const { open } = useBooking();
  return (
    <article className="bcard reveal">
      <Link className="bcard__img" to={`/bani/${bath.id}`}>
        <Ph variant={bath.ph} src={bath.img} alt={bath.name} label={bath.tag} />
      </Link>
      <div className="bcard__body">
        <h3><Link to={`/bani/${bath.id}`}>{bath.name}</Link></h3>
        <div className="bcard__meta">
          <span>{bath.area}</span>
          <span>{bath.capFull}</span>
          <span>{bath.tag}</span>
        </div>
        <p>{bath.short}</p>
        <p className="bcard__more">
          <Link className="link-arrow" to={`/bani/${bath.id}`}>
            Подробнее <Arrow />
          </Link>
        </p>
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
