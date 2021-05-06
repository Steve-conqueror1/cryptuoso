import Head from 'next/head'

export const PageHeader:React.FC = (props) => {
    const {children} = props
    return   <Head>

        {children}        
    </Head>
}