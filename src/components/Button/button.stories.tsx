import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import {ButtonSize,ButtonType} from './button'
import Button from './button'



const defaultButton = () => (
    <Button onClick={action('clicked')}>
        default Button
    </Button>
)



const buttonWithSize = () => (
    <>
        <Button size={ButtonSize.Large}> large button </Button>
        <Button size={ButtonSize.Small}> small button </Button>
    </>
)

const buttonWithType = () => (
    <>
        <Button btnType={ButtonType.Primary}>primary button</Button>
        <Button btnType={ButtonType.Danger}>Danger button</Button>
        <Button btnType={ButtonType.Link} href="https://wwww.baidu.com">href link</Button>
    </>
)

storiesOf('Button Component', module)
    // .addDecorator(CenterDecorator) // 类似装饰器作用, 可以全局放在config.tsx中
    .addParameters({ //添加样式， 可支持md
        info: {
            // text: `
            //     this is very nice component
            //     ### this is a header
            //     ~~~ js
            //     const a = 'hello'
            //     ~~~
            // `,
            inline: true
        }
    })
    .add('Button', defaultButton)
    .add('不同尺寸的button', buttonWithSize, {info: {inline: false}})
    .add('不同颜色的button ', buttonWithType)