import React from 'react'
import {fireEvent, render, RenderResult, cleanup, waitFor} from '@testing-library/react'
import Menu, {MenuProps} from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenuProps = {
    defaultIndex: '0',
    mode: 'vertical'
}
const generateMenu = (props:MenuProps) => {
    return (
        <Menu {...props}>
         <MenuItem>active</MenuItem>
         <MenuItem disabled={true}>disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
        <SubMenu title="download">
                <MenuItem>download1</MenuItem>
                <MenuItem>download2</MenuItem>
        </SubMenu>
       </Menu>
    )
}
// 给测试用例添加css
const createStyleFile = () => {
    const cssFile: string = `
        .viking-submenu {
            display: none;
        }
        .viking-submenu.menu-opened {
            display: block;
        }
    `;
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssFile;
    return style;
}
let wrapper:RenderResult, menuElement:HTMLElement, activeElement:HTMLElement, disabledElement:HTMLElement
describe( 'test Menu and MenuItem component', ()=> {
    beforeEach(  ()=> {
        wrapper = render(generateMenu(testProps))
        wrapper.container.append(createStyleFile())
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('should render correct menu and MenuItem based on default props', ()=> {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('viking-menu test')
        // expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        // :scope css提供的选中器，表示在当前节点下
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
   
    it(' click items should change active and call the right callback', ()=> {
        const thridItem = wrapper.getByText('xyz')
        fireEvent.click(thridItem)// 触发点击事件
        expect(thridItem).toHaveClass('is-active')// 添加class
        expect(activeElement).not.toHaveClass('is-active');// 判断class是否存在
        expect(testProps.onSelect).toHaveBeenCalledWith('2')// 调用 onSelect ，传入参数 2
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenLastCalledWith('1')
    })
    it( 'should render vertical mode when mode is set to vertical', ()=> {
        cleanup()// 清空之前渲染的dom节点
        const wrapper = render(generateMenu(testVerProps))
        const menuElement = wrapper.getByTestId('test-menu') // 获取改原始
        expect(menuElement).toHaveClass('menu-vertical')// 判断viking-menu是否存在
    })
    it('should show dropdown items when hover on submenu', async ()=> {
        expect(wrapper.queryByText('download1')).not.toBeVisible(); // 判断 下拉菜单是否不可见，我们上面加了css样式，设置了不可见
        const downloadElement = wrapper.getByText('download'); // title 节点
        // 触发鼠标移入事件
        fireEvent.mouseEnter(downloadElement); 
        // expect(wrapper.queryByText('download1')).toBeVisible(); // 让其显示， 这里报错，因为组件代码里我们设置延迟执行。所有使用 async 语句
        await waitFor(() => {
            expect(wrapper.queryByText('download1')).toBeVisible(); // 显示出来
        });
        // 显示出来后，点击下拉菜单第一个item
        fireEvent.click(wrapper.getByText('download1')); // 点击这个item， 触发 onSelect 事件
        expect(testProps.onSelect).toHaveBeenCalledWith('3-0'); // 返回参数 是不是  3-0 
        // 鼠标离开
        fireEvent.mouseLeave(downloadElement); 
        await waitFor(() => {
            expect(wrapper.queryByText('download1')).not.toBeVisible(); // 消失
        });
    });
})