import { createContext, useContext, useState, type ReactNode } from "react";

type ChatbotContextType = {
  isOpen: boolean;
  openChat: (prefill?: string) => void;
  closeChat: () => void;
  prefillMessage: string;
  clearPrefill: () => void;
};

const ChatbotContext = createContext<ChatbotContextType | null>(null);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState("");

  const openChat = (prefill?: string) => {
    if (prefill) setPrefillMessage(prefill);
    setIsOpen(true);
  };

  const closeChat = () => setIsOpen(false);
  const clearPrefill = () => setPrefillMessage("");

  return (
    <ChatbotContext.Provider value={{ isOpen, openChat, closeChat, prefillMessage, clearPrefill }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const ctx = useContext(ChatbotContext);
  if (!ctx) throw new Error("useChatbot must be used within ChatbotProvider");
  return ctx;
}
