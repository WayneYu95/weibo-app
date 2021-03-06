import React from 'react';
import { Link } from 'react-router-dom';
import { Affix, Row, Input } from 'antd';
import {LeftOutlined} from '@ant-design/icons';
import styles from './index.module.scss';

const{TextArea} = Input

const New = () => {
  return (
    <div className={styles.container}>
      <Affix offsetTop={0}>
        <Row
          className={styles.appbar}
          justify="space-between"
          align="middle"
        >
          <Link to="/"><LeftOutlined/></Link>
          <a className={styles.send} href="#!"> 发送 </a>
        </Row>
      </Affix>
      <div className={styles.content}>
        <TextArea 
          className={styles.textarea} 
          placeholder="分享新鲜事..."
        />
      </div>
    </div>
  )
};

export default New;