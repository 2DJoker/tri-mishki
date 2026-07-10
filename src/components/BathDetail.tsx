import { useBooking } from "../booking";
import type { Bath } from "../data/baths";
import Ph from "./Ph";

export default function BathDetail({ bath }: { bath: Bath }) {
  const { open } = useBooking();
  return (
    <div className="detail reveal" id={bath.id}>
      <div className="detail__media">
        <span className="detail__tag">{bath.tag}</span>
        <Ph variant={bath.ph} src={bath.img} alt={bath.name} label={bath.name} />
      </div>
      <div className="detail__body">
        <span className="eyebrow ember">{bath.eyebrow}</span>
        <h2>{bath.name}</h2>
        <p>{bath.long}</p>
        <div className="statline">
          <div><b>{bath.area}</b><span>площадь</span></div>
          <div><b>{bath.statCap}</b><span>человек</span></div>
          <div><b>{bath.price}</b><span>в час</span></div>
        </div>
        <div className="detail__foot">
          <button className="btn btn--solid" onClick={() => open(bath.name)}>
            Забронировать
          </button>
          <span className="detail__hint">{bath.foot}</span>
        </div>
      </div>
    </div>
  );
}
