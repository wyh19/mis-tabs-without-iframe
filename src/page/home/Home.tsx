import * as React from 'react'
import { Layout } from 'antd'
import { inject, observer } from 'mobx-react'
import * as styles from './Home.scss'
import { IAuthStore } from '../../store/auth'
import LeftMenuBar from './LeftMenuBar'
import HeadBar from './HeadBar'

@inject('store') @observer
class Home extends React.Component<any, any>{
    store: IAuthStore;
    leftWidth: number = 220
    constructor(props: any) {
        super(props)
        this.store = props.store.authStore
        this.state = {
            collapsed: false
        }
    }
    componentDidMount() {
        this.store.getOperatorInfo()
    }
    onCollapse = (collapsed: any) => {
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout className={styles.home}>
                <Layout.Header className={styles.header}>
                    <HeadBar logoWidth={this.leftWidth} />
                </Layout.Header>
                <Layout className={styles.body}>
                    <Layout.Sider
                        collapsible
                        width={this.leftWidth}
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <LeftMenuBar menuData={this.store.menus} />
                    </Layout.Sider>
                    <Layout.Content >

                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default Home
