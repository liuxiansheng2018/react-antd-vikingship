import React from 'react'
import {storiesOf} from '@storybook/react'

import Menu from './index'

const menuDefault = () =>(
    <Menu defaultIndex="0">
        <Menu.Item index="0">left</Menu.Item>
        <Menu.Item index="1">center</Menu.Item>
        <Menu.Item index="2">right</Menu.Item>
    </Menu>
)

storiesOf('menu Component',module)
    .add('menu default', menuDefault)