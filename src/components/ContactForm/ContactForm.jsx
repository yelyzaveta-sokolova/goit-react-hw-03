import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import style from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must contain at least 3 characters")
    .max(50, "Name can not exceed 50 characters")
    .matches(/^[aA-zZ\s]+$/, "Please use Latin alphabet")
    .required("Required field"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be like xxx-xx-xx")
    .required("Required field"),
});

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={style.form}>
        <label htmlFor={nameFieldId} className={style.label}>
          Name
        </label>
        <Field
          id={nameFieldId}
          type="text"
          name="name"
          className={style.field}
          placeholder="Name Surname"
        />
        <ErrorMessage className={style.error} name="name" component="span" />
        <label htmlFor={numberFieldId} className={style.label}>
          Number
        </label>
        <Field
          id={numberFieldId}
          type="text"
          name="number"
          className={style.field}
          placeholder="xxx-xx-xx"
        />
        <ErrorMessage className={style.error} name="number" component="span" />
        <button type="submit" className={style.addButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;