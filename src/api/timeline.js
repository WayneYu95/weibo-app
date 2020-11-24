import ajax from '../utils/ajax';

export function getHomeTimeline(params) {
    // return ajax.get('https://mock.don.red/weibo/2/statuses/public_timeline.json', { params });
    return ajax.get('/proxy/2/statuses/home_timeline.json', { params });
}