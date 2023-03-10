import { useForm } from "react-hook-form";
import InputPhone from "../inputPhone/inputPhone";
import styles from "./formModal.module.scss";

interface FormModalProps {
  title: string;
  description: React.ReactNode;
  //onButtonSubmit: (data) => void;
}

const FormModal: React.FC<FormModalProps> = ({
  title,
  description,
  //onButtonSubmit,
}) => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
    setValue,
  } = useForm({ mode: "onChange" });

  const onButtonSubmit = (data: {}) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.formModal}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.note}>
        <span>*</span>
        <p>Поле обязательно для заполнения</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onButtonSubmit)}>
        <label>
          <span>*</span>
          Имя
          <input
            className={styles.inputName}
            type="text"
            placeholder="Введи своё имя"
            {...register("name", {
              required: true,
              minLength: 2,
            })}
            maxLength={30}
          />
        </label>
        <label>
          <span>*</span>
          Телефон
          <InputPhone
            className={styles.inputTel}
            {...register("tel", {
              required: true,
              pattern: /[^*]{19}/,
            })}
            onValueChange={(newValue) => {
              setValue("tel", newValue, { shouldValidate: true });
            }}
          />
        </label>
        <label>
          Комментарий
          <textarea
            className={styles.textarea}
            name="text"
            placeholder="Можешь оставить свои данные любого мессенджера, и мы напишем туда"
            maxLength={80}
          />
        </label>
        <input
          className={`${styles.inputSubmit} ${isValid ? styles.active : ""}`}
          type="submit"
          value="Отправить"
          disabled={!isValid}
        />
      </form>
    </div>
  );
};

export default FormModal;
