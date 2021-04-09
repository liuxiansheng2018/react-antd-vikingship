import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Welcome page', module)
    .add('welcome', () => {
        return (
            <>
                <h1>欢迎来到lh viskingship 组件库</h1>
                <p>vikingship 是为了慕课网课程打造一套教学的组件库， 从零到一让大家学习</p>
                <h3>安装试一试</h3>
                <code>
                   <p>npm install react-antd-vikingship </p> 
                   <p>or</p>
                   <p>yarn add react-antd-vikingship</p> 
                </code>
            </>
        )
    }, {info: {disable: true}})