import * as React from 'react'
import { Menu } from 'antd'

export interface IMenuData {
    id: number | string,
    name: string,
    parentId: number | string,
    url: string
}

export interface ILeftMenuBarProps {
    menuData: Array<IMenuData>
}

class LeftMenuBar extends React.Component<ILeftMenuBarProps, any>{
    render() {
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
