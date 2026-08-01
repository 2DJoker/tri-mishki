import { useEffect, useState } from "react";

const TG_URL = "https://t.me/HutorBanya";
const WA_PHONE = "79936140645"; // +7 (993) 614-06-45

const OPTIONS = [
  "Большая баня",
  "Малая баня",
  "Нижняя баня",
  "Номер «Стандарт»",
  "Номер «Большой» (семейный)",
  "Беседка для шашлыка",
  "Веранда и горница",
  "Парение у банщика",
  "Встреча с енотом",
  "Встреча с дедом-травоведом",
  "Пока не выбрал(а)",
];

function TgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.9 4.1c.3-1.2-.9-2.2-2-1.7L2.7 9.2c-1.2.5-1.1 2.2.1 2.6l4.6 1.5 1.7 5.5c.3 1.1 1.7 1.4 2.5.6l2.5-2.5 4.4 3.3c.9.7 2.2.2 2.4-.9l3-15.2ZM8.5 12.9l9.3-6.1c.4-.2.7.3.4.6l-7.6 7.1c-.3.3-.5.7-.6 1.1l-.3 2.2-1.2-4.9Z" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.5-1.4-.7-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

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

  const message = `Здравствуйте! Хочу забронировать: ${bath}.\nИмя: ${name}\nТелефон: ${phone}`;
  const waLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
    "Здравствуйте! Хочу забронировать баню на хуторе."
  )}`;

  const submit = () => {
    if (!name.trim() || !phone.trim()) return;
    // t.me не умеет предзаполнять текст личного чата —
    // копируем заявку в буфер и открываем диалог с @HutorBanya
    navigator.clipboard?.writeText(message).catch(() => {});
    window.open(TG_URL, "_blank", "noopener");
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
            <p>Заполните форму — откроем чат с нами в Telegram. Или напишите напрямую:</p>

            <div className="msgr">
              <a
                className="msgr__btn msgr__btn--tg"
                href={TG_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram: @HutorBanya"
              >
                <TgIcon /><span>Telegram</span>
              </a>
              <a
                className="msgr__btn msgr__btn--wa"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp: +7 (993) 614-06-45"
              >
                <WaIcon /><span>WhatsApp</span>
              </a>
            </div>

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
              Отправить заявку в Telegram
            </button>
          </div>
        ) : (
          <div className="modal__ok">
            <div className="tick">✓</div>
            <h3>Почти готово!</h3>
            <p>
              Мы открыли наш чат в Telegram, а текст заявки скопировали —
              просто вставьте его в сообщение и отправьте.
            </p>
            <div className="msgr msgr--center">
              <a
                className="msgr__btn msgr__btn--tg"
                href={TG_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TgIcon /><span>Открыть Telegram</span>
              </a>
              <a
                className="msgr__btn msgr__btn--wa"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon /><span>WhatsApp</span>
              </a>
            </div>
            <button className="btn btn--ghost btn--block" onClick={onClose}>Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}
