import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { mockComponent } from 'react-dom/test-utils';
import { useDispatch, useMappedState } from 'redux-react-hook';
import moment from 'moment'
import { getHomeTimeline } from '../../actions/timeline';
import styles from './index.module.scss';

const mapStateTimeline = state => state.timeline;

const Home = () => {
  const dispatch = useDispatch();
  const { home = [] } =useMappedState(mapStateTimeline);

  useEffect(() => {
    dispatch(getHomeTimeline());
  }, [dispatch]);

  return (
    <div>
      {
        home.map(({id, text, user, create_at,source }) => (
          <div key={id } style={{marginBottom:'10px'}}>
            <div style={{ display:'flex'}}> 
              <img 
              src={user.profile_image_url} 
              className = {styles.avatar} />
              <div>
                <div> {user.screen_name} </div>
                <div> 
                  {moment(create_at).fromNow()} 
                  来自　<span dangerouslySetInnerHTML={{__html:source}}/>
                </div>
              </div>
            </div>
            {text}
          </div>
        ))
      }
    </div>
  );
};

export default Home;