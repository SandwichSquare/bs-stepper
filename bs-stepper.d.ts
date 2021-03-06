declare type StepperOptions = {
  linear: boolean,
  animation: boolean
};

declare class Stepper {
  constructor(element: Element, _options?: StepperOptions);
  next(): void;
  previous(): void;
  reset(): void;
  destroy(): void;
}

export default Stepper;
