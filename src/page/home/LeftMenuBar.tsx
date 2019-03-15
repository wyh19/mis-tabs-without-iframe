import * as React from 'react'
import { Menu } from 'antd'
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { IMenuData } from '../../store/auth'


export interface ILeftMenuBarProps {
    menuData: Array<IMenuData>
}

@immutableRenderDecorator
class LeftMenuBar extends React.Component<ILeftMenuBarProps, any>{
    mapMenu = () => {

    }
    render() {
        const { menuData } = this.props
        return (
            <Menu
                theme="dark"
                mode="inline"
            >
                {
                    menuData?this.mapMenu(menuData):null
                }
            </Menu>
        )
    }
}
export default LeftMenuBar
