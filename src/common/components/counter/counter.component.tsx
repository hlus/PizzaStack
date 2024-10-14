import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {
  onRestart?: () => void;
}

export const Counter: React.FC<Props> = ({ onRestart = () => null, children, ...rest }) => {
  const [counter, setCounter] = React.useState(60);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const counterRef = React.useRef<NodeJS.Timer>();

  const startCounter = () => {
    setIsDisabled(true);
    setCounter(60);
    counterRef.current = setInterval(() => setCounter((counter) => counter - 1), 1000);
  };

  const handleButtonClick = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event) {
      onRestart();
    }

    startCounter();
  };

  React.useEffect(startCounter, []);

  React.useEffect(() => {
    if (counter === 0) {
      clearInterval(counterRef.current);
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <button className="text-gray-900 text-sm" disabled={isDisabled} onClick={handleButtonClick} {...rest}>
      {children} {isDisabled && `(${counter} sec)`}
    </button>
  );
};
