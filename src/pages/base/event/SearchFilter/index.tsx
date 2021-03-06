import * as React from 'react';
import { Input, Button } from 'antd';
import styles from './index.scss';
import { EventSearchProps } from '@/interfaces/event';

interface SearchFilterProps {
  searchProps: EventSearchProps;
  changeSearchProps: (searchProps: EventSearchProps) => void;
  onSearch: () => void;
}

export default class SearchFilter extends React.PureComponent<SearchFilterProps> {
  render() {
    const { searchProps, onSearch, changeSearchProps } = this.props;
    return (
      <div className={styles.filterPanel}>
        <div className={styles.filterItem}>
          <span className={styles.label}>项目名称：</span>
          <Input
            allowClear={true}
            value={searchProps.competitionEventName}
            placeholder="请输入项目名称"
            onChange={e => changeSearchProps({ competitionEventName: e.target.value })}
          />
        </div>
        <Button type="primary" onClick={onSearch}>
          查询
        </Button>
        <div className={styles.filterItem}>
          <span className={styles.label}>项目编码：</span>
          <Input
            allowClear={true}
            value={searchProps.competitionEventCode}
            placeholder="请输入项目编码"
            onChange={e => changeSearchProps({competitionEventCode : e.target.value })}
          />
        </div>
        <Button type="primary" onClick={onSearch}>
          查询
        </Button>
      </div>
    );
  }
}