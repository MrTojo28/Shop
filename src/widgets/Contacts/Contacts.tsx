import React from "react";

import "./Contacts.css";

interface Props {}

export function Contacts({}: Props) {
  return (
    <div className="contacts">
      <span>Свяжитесь с нами по данному адресу для уточнения деталей:</span>
      <a href="mailto:floreks.kemsu@yandex.ru">floreks.kemsu@yandex.ru</a>
    </div>
  );
}
