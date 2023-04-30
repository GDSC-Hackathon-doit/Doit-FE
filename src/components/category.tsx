import React from "react";
import { Menu } from "@mantine/core";

function Category() {
  return (
    <Menu offset={6} arrowPosition="center">
      <Menu.Item>전체 기사 보기</Menu.Item>
      <Menu.Item>Step 1</Menu.Item>
      <Menu.Item>Step 2</Menu.Item>
      <Menu.Item>Step 3</Menu.Item>
      <Menu.Item>나의 저장 목록</Menu.Item>
      <Menu.Item>Habit Tracker</Menu.Item>
    </Menu>
  );
}

export default Category;
