import React, {createContext, useState} from 'react'
import classNames from 'classnames'
import SubMenu from './subMenu'
import MenuItem, {MenuItemProps} from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode,
    style?: React.CSSProperties,
    onSelect?: (selectedIndex: string) => void;
    defaultOpenSubMenus?: string[],
} 
interface IMenuContext {
    index: string;
    onSelect?:SelectCallback;
    mode?:MenuMode;
    defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({index: '0'})
export interface MenuItemTypeProps extends React.FC<MenuProps> {
    SubMenu: typeof SubMenu;
    Item: typeof MenuItem
}

const Menu: MenuItemTypeProps  = (props) => {
    const {className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus} = props;
    const [currentActive, setActive] = useState(defaultIndex)
    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })

    const handleClick = (index:string) => {
        setActive(index)
        if( onSelect ) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ?  currentActive : '0' ,
        onSelect: handleClick,
        mode:mode,
        defaultOpenSubMenus,
    }
    const renderChildren = () => {
        return React.Children.map( children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            if( displayName === 'MenuItem' || displayName === 'SubMenu' ) {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.error("waring : Menu has a child which is not a MenuItem")
            }
        }) 
    }
    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
            
        </ul>
    )
}
Menu.SubMenu = SubMenu
Menu.Item = MenuItem
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

MenuItem.displayName = 'MenuItem'


export default Menu