import { createContext, useContext, useState, type ReactNode } from "react";
import BookingModal from "./components/BookingModal";

interface BookingApi {
  open: (bath?: string) => void;
}

const BookingContext = createContext<BookingApi>({ open: () => {} });

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bath, setBath] = useState<string | undefined>(undefined);

  const open = (b?: string) => {
    setBath(b);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      <BookingModal isOpen={isOpen} initialBath={bath} onClose={close} />
    </BookingContext.Provider>
  );
}
