import { useEffect, useState } from "react";

const OPTIONS = [
  "Большая баня",
  "Малая баня",
  "Нижняя баня",
  "Встреча с енотом",
  "Пока не выбрал(а)",
];

export default function BookingModal({
  isOpen,
  initialBath,
  onClose,
}: {
  isOpen: boolean;
  initialBath?: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bath, setBath] = useState(OPTIONS[0]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSent(false);
      if (initialBath && OPTIONS.includes(initialBath)) setBath(initialBath);
    }
  }, [isOpen, initialBath]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const submit = () => {
    if (!name.trim() || !phone.trim()) return;
    // TODO: отправка заявки в Telegram-бот / CRM. Сейчас — заглушка.
    setSent(true);
  };

  return (
    <div
      className={`modal ${isOpen ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Бронирование"
    >
      <div className="modal__bg" onClick={onClose} />
      <div className="modal__card">
        <button className="modal__close" aria-label="Закрыть" onClick={onClose}>×</button>

        {!sent ? (
          <div className="modal__form">
            <span className="eyebrow ember">Бронирование</span>
            <h3>Записаться на баню</h3>
            <p>Оставьте контакты — перезвоним, подтвердим дату и время.</p>

            <div className="field">
              <label htmlFor="bk-name">Ваше имя</label>
              <input
                id="bk-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="bk-phone">Телефон</label>
              <input
                id="bk-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 ___ ___-__-__"
                autoComplete="tel"
              />
            </div>
            <div className="field">
              <label htmlFor="bk-bath">Что бронируем</label>
              <select
                id="bk-bath"
                value={bath}
                onChange={(e) => setBath(e.target.value)}
              >
                {OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <button className="btn btn--solid btn--block" onClick={submit}>
              Отправить заявку
            </button>
          </div>
        ) : (
          <div className="modal__ok">
            <div className="tick">✓</div>
            <h3>Заявка отправлена</h3>
            <p>Спасибо! Свяжемся с вами в ближайшее время.</p>
            <button className="btn btn--ghost btn--block" onClick={onClose}>Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}
