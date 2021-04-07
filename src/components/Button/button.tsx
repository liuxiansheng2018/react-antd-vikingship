import React, {FC,ButtonHTMLAttributes,AnchorHTMLAttributes} from 'react';
import classnames from 'classnames'
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button的尺寸 */
    size?: ButtonSize,
    /**设置Button 的类型*/
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps =Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 这是我们的第一个Button 组件
 * ## Button header
 * ~~~ js
 * import {Button} from 'vikingship'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
    const {btnType, className, disabled, size, children, href, ...restProps} = props
    // btn btn-lg btn-primary
    const classes = classnames('btn',className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType ===ButtonType.Link) && disabled
    })
    if( btnType === ButtonType.Link ) {
        return (
            <a {...restProps} className={classes} href={href}>{children}</a>
        )
    } else {
        return (
            <button  {...restProps} className={classes} disabled={disabled}>{children}</button>
        )
    }

}

Button.defaultProps = {
    disabled:false,
    btnType: ButtonType.Default,
}
export default Button;