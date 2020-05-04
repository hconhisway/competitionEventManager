/*
 * @文件描述: 首页
 * @公司: 山东大学
 * @作者: 李洪文
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-09 15:40:17
 * @LastEditTime: 2020-04-28 19:30:03
 */
import * as React from 'react';
import { compose, withState } from 'recompose';

export interface HomepageProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

class Upload extends React.Component<HomepageProps> {
  public render() {
    return <div>
      <h2>欢迎使用比赛项目管理系统</h2>
      <p><b>以下是一些注意事项</b></p>
      <ul>
        <li> -比赛日期请严格按照<b>YYYY-MM-DD</b>格式输入</li>
        <li> -比赛组别分为1.成人组 2.青少年组 3.老年组</li>
        <li> -比赛状态分为1.未开始 2.进行中 3.已结束</li>
      </ul>

    </div>;
  }
}

export default compose(withState('visible', 'setVisible', false))(Upload);
