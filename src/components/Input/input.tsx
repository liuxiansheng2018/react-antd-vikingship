import React, {FC, InputHTMLAttributes, ReactElement, ChangeEvent} from 'react'
import classNames from 'classnames'
import {IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/icon'
type InputSize = 'lg' | 'sm'
// Omit 是一个泛型用来移除接口 size
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' >{
   /** disabled 禁用 */
    disabled?: boolean;
    /** size 尺寸大小 */
    size?: InputSize;
    /** icon 是否添加图标样式 */
    icon?: IconProp;
    /** prepend 添加input 前缀 */
    prepend?: string | ReactElement;
    /** append 添加input 后缀 */
    append?: string| ReactElement;
    /** style 添加样式 */
    style?: React.CSSProperties;
    /** onChange 变化回调 */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
/**
 * 这是我们的一个input
 * ### Input Header
 * ~~~js
 * import {Input} from 'vikingship'
 * ~~~
 */
export const Input:FC<InputProps> = (props) => {
    // 取出属性
    const {disabled, size, icon, prepend, append, style, children, ...restProps} = props

    //根据属性计算不同的className
    const classes = classNames('viking-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    })

    const fixControlledValue = (value: any) => {
        if(typeof value === 'undefined' || value === null) {
            return ''
        }
        return value
    }

    if( 'value' in  props ) {
        delete restProps.defaultValue
        restProps.value = fixControlledValue(props.value)
    }

    return (
        // 根据属性判断是否要添加特定的节点
        <div className={classes} style={style}>
            {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}></Icon></div>}
            <input 
                className="vinking-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {append && <div className='viking-input-group-append'>{append}</div>}
            {children}
        </div>
    )
}

Input.defaultProps = {
    size: 'lg'
}

export default Input;