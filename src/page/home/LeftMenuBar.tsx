import * as React from 'react'
import {Menu} from 'antd'
 
export interface Props {

}

class LeftMenuBar extends React.Component<Props, any>{
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