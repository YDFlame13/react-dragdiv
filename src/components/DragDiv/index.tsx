import React from 'react';
import classnames from 'classnames';

export interface DragDivProps {
  className?: string,
  children?,
}

const DragDiv = ({
  className,
  children = null,
}: DragDivProps) => {
  return (
    <div
      className={classnames(className)}
    >
      {children}
    </div>
  )
}

export default DragDiv;