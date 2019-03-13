import * as React from 'react'
import { Layout } from 'antd'
import { inject, observer } from 'mobx-react'
import * as styles from './Home.scss'
import { IAuthStore } from '../../store/auth'
import LeftMenuBar from './LeftMenuBar'

@inject('store') @observer
class Home extends React.Component<any, any>{
    store: IAuthStore;
    constructor(props: any) {
        super(props)
        this.store = props.store.authStore
    }
    componentDidMount() {
        this.store.getOperatorInfo()
    }
    render() {
        return (
            <Layout className={styles.home}>
                <Layout.Header className={styles.header}>

                </Layout.Header>
                <Layout className={styles.body}>
                    <Layout.Sider
                        collapsible
                        width={220}
                    >
                        <LeftMenuBar menuData={this.store.menus}/>
                    </Layout.Sider>
                    <Layout.Content >

                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default Home
