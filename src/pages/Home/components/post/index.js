import React from 'react';
import { Card } from 'antd';
import moment from 'moment';
import { RetweetOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const getPostTitle = (
  user,
  create_at,
  source,
) => (
    <div className={styles.user}>
      <img
        src={user.profile_image_url}
        className={styles.avatar}
        alt={user.screen_name}
      />
      <div className={styles.userInfo}>
        <div> {user.screen_name} </div>
        <div className={styles.extra}>
          {moment(create_at).fromNow()}
      来自　<span dangerouslySetInnerHTML={{ __html: source }} />
        </div>
      </div>
    </div>
  );


const Post = ( {
  type, text, user, create_at,source, pic_urls,
  repost_count,attitudes_count,comments_count, retweet_status,
}) => {
  return (
    <Card
      type={type}
      className={styles.post}
      bordered={false}
      hoverable
      title={
        getPostTitle(
          user,
          create_at,
          source,
        )
      }
      actions={ type? [] :[
        <div>
          <RetweetOutlined key="retweet" />
          <span>{repost_count || ''}</span>
        </div>,
        <div>
          <LikeOutlined key="like" />
          <span>{attitudes_count || ''}</span>
        </div>,
        <div>
          <MessageOutlined key="message" />
          <span>{comments_count || ''}</span>
        </div>
      ]}
    >
      <div className={styles.content}>
        <div className={styles.text}>
          {text}
          {
            retweet_status && 
            <Post type="inner" {...retweet_status} />
          }
        </div>
        <ul className={styles.images}>
          {
            pic_urls.map(({ thumbnail_pic }) => (
              <li key={thumbnail_pic} className={styles.imgWrapper}>
                <div className={styles.imgContainer}>
                  <img src={thumbnail_pic} alt={thumbnail_pic} />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </Card>
  )
};

export default Post;