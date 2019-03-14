import * as React from 'react'
import { Menu } from 'antd'
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { IMenuData } from '../../store/auth'


export interface ILeftMenuBarProps {
    menuData: Array<IMenuData>
}

@immutableRenderDecorator
class LeftMenuBar extends React.Component<ILeftMenuBarProps, any>{
    render() {
        console.log(this.props.menuData)
        return (
            <Menu
                theme="dark"
                mode="inline"
            >

            </Menu>
        )
    }
}
export default LeftMenuBar
