import * as React from 'react'
import { Menu } from 'antd'
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { IMenuData } from '../../store/auth'


export interface ILeftMenuBarProps {
    menuData: Array<IMenuData>
}

@immutableRenderDecorator
class LeftMenuBar extends React.Component<ILeftMenuBarProps, any>{
    mapMenus = (menus: Array<IMenuData>) => {
        return menus.map(v => {
            if (v.children) {
                return (
                    <Menu.SubMenu key={v.url ? v.url : v.id} title={v.name}>
                        {
                            this.mapMenus(v.children)
                        }
                    </Menu.SubMenu>
                )
            } else {
                return (
                    <Menu.Item
                        key={v.url}
                    >
                        <span className='nav-text'>{v.name}</span>
                    </Menu.Item>
                )
            }
        })
    }
    render() {
        const { menuData } = this.props
        return (
            <Menu
                theme="dark"
                mode="inline"
            >
                {
                    menuData ? this.mapMenus(menuData) : null
                }
            </Menu>
        )
    }
}
export default LeftMenuBar
