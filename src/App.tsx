import React, {useState} from 'react'
import Button, {ButtonType, ButtonSize} from './components/Button/button'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import Input, {InputProps} from './components/Input/input'

const {Item} = Menu
function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <Button className="custom" onClick={(e)=> {e.preventDefault(); alert(123)}} > Hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
        <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}> disable Button </Button>
        <Button target="_black" btnType={ButtonType.Link} href="http://www/baidu.com"> 百度Link </Button>
        <Button btnType={ButtonType.Link} href="http://www/baidu.com" disabled={true}> 禁止适用 </Button>
       {/* <Menu mode="vertical" defaultIndex={0} onSelect={ (index)=> console.log(index) }>
         <MenuItem index={0}>cool link</MenuItem>
         <MenuItem index={1} disabled>cool link 2</MenuItem>
         <MenuItem index={2}>cool link 3</MenuItem>
       </Menu> */}
       <Menu mode="vertical" defaultIndex='0' onSelect={ (index)=> alert(index) } defaultOpenSubMenus={['3']}>
         <MenuItem>cool link</MenuItem>
         <MenuItem disabled>cool link 2</MenuItem>
         <MenuItem>cool link 3</MenuItem>
     
         <Menu.SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
            <Item>
              aaa
            </Item>
            <Item>
              bbb
            </Item>
         </Menu.SubMenu>
       </Menu>
       <Input size="lg" onChange={(e)=> setValue(e.target.value)} value={value} prepend={<div>fix:</div>} append={<div>end</div>}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 

      </header>
    </div>
  );
}

export default App;
