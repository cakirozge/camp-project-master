import React from 'react'
import { NavLink } from 'react-router-dom';
import {Dropdown} from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
       <Dropdown item text="Sepetiniz">
            <Dropdown.Menu>
              <Dropdown.Item>iPhone X</Dropdown.Item>
              <Dropdown.Item>Huawei P30</Dropdown.Item>
              <Dropdown.Item>MacBook Pro</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item as={NavLink} to="/Cart">Sepete Git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
