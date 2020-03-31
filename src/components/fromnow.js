import dayjs from 'dayjs';

// 加载 fromNow
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

// 国际化语言
require('dayjs/locale/zh-cn');
dayjs.locale('zh-cn');

export default function FromNow(props) {
    let { date } = props;
    return dayjs(date).fromNow();
}