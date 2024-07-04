import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import { ReactComponent as ExclamationIcon } from "@app/assets/icons/exclamation.svg";
import { ReactComponent as InformationIcon } from "@app/assets/icons/information-circle.svg";

export enum ShowInfoType {
  Error,
  Info,
}

const iconsMap: Record<ShowInfoType, FC<React.SVGProps<SVGSVGElement>>> = {
  [ShowInfoType.Error]: ExclamationIcon,
  [ShowInfoType.Info]: InformationIcon,
};

interface Props {
  type: ShowInfoType;
}

export const ShowInfo: FC<PropsWithChildren<Props>> = ({ children, type }) => {
  const topBlockStyles = clsx(
    "rounded-t-2xl h-16 flex justify-center items-center mb-2",
    {
      "bg-red-500": type === ShowInfoType.Error,
      "bg-blue-500": type === ShowInfoType.Info,
    }
  );
  const iconStyle = "text-white h-12";
  const Icon = iconsMap[type];

  return (
    <div className="flex justify-center">
      <div className="shadow-xl rounded-2xl w-64">
        <div className={topBlockStyles}>
          <Icon className={iconStyle} />
        </div>
        <div className="bg-white text-center pb-2 rounded-b-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};
