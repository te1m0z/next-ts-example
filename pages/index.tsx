import { Button, Htag } from '../components'

const Home = () => {
    return (
        <>
            <Htag size={'h1'}>hello</Htag>

            <Button appearance={'primary'}>Кнопка</Button>

            <Button appearance={'ghost'}>Кнопка</Button>
        </>
    )
}

export default Home