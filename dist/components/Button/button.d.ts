import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
export declare enum ButtonSize {
    Large = "lg",
    Small = "sm"
}
export declare enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
interface BaseButtonProps {
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button的尺寸 */
    size?: ButtonSize;
    /**设置Button 的类型*/
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 这是我们的第一个Button 组件
 * ## Button header
 * ~~~ js
 * import {Button} from 'vikingship'
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export default Button;
