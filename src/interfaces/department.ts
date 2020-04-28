/*
 * @Author: your name
 * @Date: 2020-04-22 01:04:01
 * @LastEditTime: 2020-04-25 16:50:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted\src\interfaces\department.ts
 */
import { PAGE_SIZE } from './common';

export interface DepartmentModel {
  // 部门编码
  departmentCode: string;
  // 部门名称
  departmentName: string;
  // 联系人
  contact: string;
  // 联系电话
  contactPhone: string;
  // 描述
  description: string;
  // 创建日期
  createdAt: string;
  // 修改日期
  updatedAt: string;
}

export interface DepartmentEditModel {
  // 部门编码
  departmentCode?: string;
  // 部门名称
  departmentName?: string;
  // 联系人
  contact?: string;
  // 联系电话
  contactPhone?: string;
  // 描述
  description?: string;
}

export interface DepartmentSearchProps {
  departmentName?: string;
  page?: number;
  pageSize?: number;
}

export const defaultDepartmentSearchProps: DepartmentSearchProps = {
  departmentName: undefined,
  page: 1,
  pageSize: PAGE_SIZE,
};
