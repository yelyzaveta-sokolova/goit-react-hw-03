import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contactsTel, onDeleteContact }) {
  return (
    <ul className={styles.listContacts}>
      {contactsTel.map((item) => {
        return (
          <li key={item.id}>
            <Contact
              name={item.name}
              number={item.number}
              id={item.id}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
}