/*
 * @Author: your name
 * @Date: 2020-04-28 19:11:56
 * @LastEditTime: 2020-04-28 19:19:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \event-master\src\services\event.service.ts
 */
import { action } from 'mobx';
import HttpClient from '../utils/HttpClient';
import { BACKEND_URL, messageFail } from './common';
import { Pagination, initalPaginationValue } from '@/interfaces/common';
import {
  EventModel,
  EventSearchProps,
  EventEditModel,
} from '@/interfaces/event';

import { EventStore } from '@/stores/event.store';

export class EventService {
  public store: EventStore;
  private http: HttpClient;

  public constructor() {
    this.http = new HttpClient();
    this.store = new EventStore();
  }

  @action
  public async fetchPageData(searchProps: EventSearchProps): Promise<boolean> {
    this.store.loading = true;
    this.store.pageData = initalPaginationValue;
    try {
      const result = await this.http.postJSON<Pagination<EventModel>>(
        `${BACKEND_URL}/competitionEvent/listByPage`,
        searchProps,
      );
      this.store.loading = false;
      if (result.success) {
        this.store.pageData = result.data;
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      this.store.loading = false;
      messageFail();
      return false;
    }
  }

  @action
  public async update(data: EventEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/competitionEvent/updateCompetitionEvent`, data);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async add(data: EventEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/competitionEvent/addCompetitionEvent`, data);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async delete(codeList: string[]): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/competitionEvent/deleteCompetitionEvent`, codeList);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }
}