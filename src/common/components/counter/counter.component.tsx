import React, { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  onSendCodeAgain?: () => void;
}

export const Counter: React.FC<Props> = ({
  onSendCodeAgain = () => {},
  children,
  ...rest
}) => {
  const [counter, setCounter] = React.useState(60);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const counterRef = React.useRef<NodeJS.Timer>();

  const startCounter = () => {
    setIsDisabled(true);
    setCounter(60);
    counterRef.current = setInterval(
      () => setCounter((counter) => counter - 1),
      1000
    );
  };

  const handleSendCodeClick = () => {
    startCounter();
    onSendCodeAgain();
  };

  React.useEffect(startCounter, []);

  React.useEffect(() => {
    if (counter === 0) {
      clearInterval(counterRef.current);
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <button
      className="text-gray-900 text-sm"
      disabled={isDisabled}
      onClick={handleSendCodeClick}
      {...rest}
    >
      {children} {isDisabled && `(${counter} sec)`}
    </button>
  );
};
