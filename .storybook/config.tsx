import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import "../src/styles/index.scss"


const styles:React.CSSProperties = {
    // textAlign: 'center'
    padding: '20px 40px'
}
// const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
const storyWrapper = (stroyFn: any) => (
    <div style={styles}>
        <h3>组件演示</h3>
        {stroyFn()}
    </div>
)
// addDecorator(CenterDecorator)
addDecorator(storyWrapper)
addDecorator(withInfo as any)
addParameters({
    info: {
        inline: true,
        header: false
    }
})
configure(require.context('../src/components', true, /\.stories\.tsx$/), module)