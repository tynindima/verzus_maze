import React, { FC } from 'react';
import './styles/directions.scss';

interface Props {
  fieldOfArrows: Arrow[];
}

export const Directions: FC<Props> = (props) => {
  const { fieldOfArrows } = props;

  return (
    <div className="directions">
        {fieldOfArrows.map((item: Arrow) => (
          <div
            className={`directions__step directions__step--${item.name}`}
            key={item.id}
          />
        ))}
      </div>
  );
};
