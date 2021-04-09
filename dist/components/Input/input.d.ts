import React, { FC, InputHTMLAttributes, ReactElement, ChangeEvent } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    /** disabled 禁用 */
    disabled?: boolean;
    /** size 尺寸大小 */
    size?: InputSize;
    /** icon 是否添加图标样式 */
    icon?: IconProp;
    /** prepend 添加input 前缀 */
    prepend?: string | ReactElement;
    /** append 添加input 后缀 */
    append?: string | ReactElement;
    /** style 添加样式 */
    style?: React.CSSProperties;
    /** onChange 变化回调 */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * 这是我们的一个input
 * ### Input Header
 * ~~~js
 * import {Input} from 'vikingship'
 * ~~~
 */
export declare const Input: FC<InputProps>;
export default Input;
