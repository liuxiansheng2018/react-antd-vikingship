import React, {useState,ChangeEvent} from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Input from "./input"

const ControlledInput = () => {
    const [value, setValue] = useState('');
    return <Input value={value} defaultValue={value} onChange={(e: ChangeEvent<HTMLInputElement>)=>setValue(e.target.value) } />
}

const defaultInput = () => (
    <>
        <Input 
            maxLength={10}
            style={{width: '300px'}}
            placeholder="placeholder"
            onChange={action('changed')}
            size="lg"
        />
        <ControlledInput />
    </>
) 

const defaultInputSize = () => (
    <Input
        placeholder="请输入输入框"
        size="sm" 
    />
)
const IconInput = () => (
    <Input 
        icon="search"
        placeholder="input with icon"
    />
)

const pandInput = () => (
    <>
        <Input 
            placeholder="带前缀的"
            prepend="https://"
        />
        <Input 
            placeholder="带后缀的"
            append={<div>.com</div>}
        />
    </>
)

storiesOf('Input Component', module)
    .add('Input', defaultInput)
    .add('Input尺寸', defaultInputSize)
    .add('带图标的Input', IconInput)
    .add('带后缀的Input', pandInput)