import { Row, Col, Input, Button, List } from 'antd';
import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './style.css';

const TodoList = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodoItem = () => {
    props.dispatch({
      type: 'custom/addTodoItem',
      data: inputValue,
    });
  };
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Row gutter={16}>
            <Col span={18}>
              <Input placeholder="新增代办事项" value={inputValue} onChange={handleInputChange} />
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={handleAddTodoItem}>
                添加
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6} className={styles.todoList}>
          <List
            bordered
            dataSource={props.todoList}
            renderItem={(item, index) => <List.Item key={index}>{item}</List.Item>}
          />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.custom.todoList,
  };
};
export default connect(mapStateToProps)(TodoList);
