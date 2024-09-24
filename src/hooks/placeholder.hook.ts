import { useEffect } from "react";

export default function usePlaceholderTyping(cid: string) {
  useEffect(() => {
    const el = document.getElementById(cid) as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null;

    if (!el) return;
    const defaultValue = el.placeholder;
    el.onfocus = () => {
      el.placeholder = "Start Typing...";
    };
    el.onblur = () => {
      el.placeholder = defaultValue ?? "";
    };
  });
}
