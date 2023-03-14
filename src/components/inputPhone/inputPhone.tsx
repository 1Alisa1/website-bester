import { forwardRef, useImperativeHandle } from "react";
import {
  KeyboardEventHandler,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "./inputPhone.module.scss";

interface InputPhoneProps {
  onValueChange?: (newValue: string) => void;
  className?: string;
}

const InputPhone: React.FC<InputPhoneProps> = forwardRef(({
  onValueChange,
  className,
}, ref) => {
  const prefix = "+375\u00A0"
  const placeholder = "(**)\u00A0***\u00A0**\u00A0**";
  const accept = new RegExp("\\d", "g");
  const first = placeholder.indexOf("*");
  const prev: number[] = [];
  for (let i = 0, last = 0; i < placeholder.length; i++) {
    if (placeholder[i] === "*") {
      last = i + 1;
    }
    prev.push(last);
  }

  const [isBackspace, setIsBackspace] = useState<Boolean>(false);
  const [value, setValue] = useState<string>(placeholder);
  const [selection, setSelection] = useState<[number, number]>();
  const inputEl = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => inputEl.current)

  useLayoutEffect(() => {
    if (!inputEl.current) {
      return;
    }

    inputEl.current.innerHTML = value.replaceAll(
      "*",
      `<span class=${styles.spot}>*</span>`
    );

    if (!selection) {
      return;
    }

    const newRange = document.createRange();
    newRange.setStart(inputEl.current.childNodes[0], selection[0]);
    newRange.setEnd(inputEl.current.childNodes[0], selection[1]);

    const documentSelection = document.getSelection();

    if (!documentSelection) {
      return;
    }

    documentSelection.removeAllRanges();
    documentSelection.addRange(newRange);

  }, [selection]);

  const clean = (input: string) => {
    let value = input.match(accept) || [];
    return Array.from(placeholder, (char) =>
      char === value[0] || char === "*" ? value.shift() || char : char
    );
  };

  const format = () => {
    if (!inputEl.current) {
      return;
    }

    const selection = window.getSelection();

    const selectionStart = selection?.anchorOffset ?? 0;
    const selectionEnd = selection?.focusOffset ?? 0;
    const oldValue = inputEl.current.textContent ?? "";

    const [i, j] = [selectionStart, selectionEnd].map((i) => {
      const index = clean(oldValue.slice(0, i)).findIndex(
        (char) => char === "*"
      );

      return index < 0
        ? prev[prev.length - 1]
        : isBackspace
        ? prev[index - 1] || first
        : index;
    });

    const newValue = clean(oldValue).join("");

    setValue(newValue);

    if (onValueChange) {
      onValueChange(prefix + newValue);
    }
    setSelection([i, j]);
    setIsBackspace(false);
  };

  const handleKeyDown: KeyboardEventHandler = (e) => {
    setIsBackspace(e.key === "Backspace");
  };

  return (
    <div
      ref={inputEl}
      contentEditable
      suppressContentEditableWarning
      data-prefix={prefix}
      className={styles.input + " " + className}
      onKeyDown={handleKeyDown}
      onInput={format}
      onFocus={format}
    />
  );
});

export default InputPhone;
