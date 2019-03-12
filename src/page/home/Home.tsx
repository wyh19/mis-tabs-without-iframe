import * as React from 'react'
import { Layout } from 'antd'
import * as styles from './Home.scss'

export interface Props {

}

class Home extends React.Component<Props, any>{
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

                    </Layout.Sider>
                    <Layout.Content >

                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default Home