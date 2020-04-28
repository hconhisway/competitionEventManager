/*
 * @Author: your name
 * @Date: 2020-04-28 19:14:48
 * @LastEditTime: 2020-04-28 19:15:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \event-master\src\stores\event.store.ts
 */
import { observable } from 'mobx';
import { EventModel } from '@/interfaces/event';

import { Pagination, initalPaginationValue } from '@/interfaces/common';

export class EventStore {
  // 正在获取数据状态
  @observable
  public loading: boolean;

  // 部门分页列表数据
  @observable
  public pageData: Pagination<EventModel> = initalPaginationValue;

}