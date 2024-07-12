import { FC } from "react";

interface Props {
  width: number;
  height: number;
}

export const Skeleton: FC<Props> = ({ width, height }) => (
  <div
    className="bg-gray-200 rounded-full animate-pulse"
    style={{ width, height }}
  />
);
