import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList } from '@/store/test';
import { Button } from "antd";

const Test = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector(state => state.test);
  return <div>
    {
      todoList.map(item => item)
    }
    <Button onClick={() => dispatch(addTodoList('新增一个'))}>新增</Button>
  </div>
}

export default memo(Test)