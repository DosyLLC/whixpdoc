import React, { ReactNode } from "react";

export interface IHighlightProps {
  title: string;
  description: ReactNode;
}

export const Highlight: React.FC<IHighlightProps> = ({
  title,
  description,
}) => {
  return (
    <div className="highlight">
      <h2 className="highlight__title">{title}</h2>
      <p className="highlight__description">{description}</p>
    </div>
  );
};
