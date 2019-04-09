/**
 * @Time    :   2019/04/09 11:16:39
 * @Author  :   wyh19
 * @Contact :   wyh_19@163.com
 * @Desc    :   None
 */
import * as React from 'react'

export interface HeadBarProps {
    logoWidth:number
}

class HeadBar extends React.Component<HeadBarProps, any>{
    render() {
        return (
            <div>
                <div className="logo-area">

                </div>
                <div className="head-bar">

                </div>
            </div>
        )
    }
}
export default HeadBar
