import React from 'react';

import { DragDiv } from 'src/components';

import styles from "./index.module.scss";

const Demo = () => {
  return (
    <div className={styles.container}>
      <DragDiv
        className={styles.dragDiv}
      >
        
      </DragDiv>
    </div>
  )
}

export default Demo;