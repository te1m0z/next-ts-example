import React                    from 'react'
import { Button, Htag, P, Tag } from '../components'

const Home = () => {

    React.useEffect(() => {
        console.log('da')
    }, [])

    return (
        <>
            <Htag size={ 'h1' }>hello</Htag>

            <Button appearance={ 'primary' } arrowDirection={ 'down' }>Кнопка</Button>

            <Button appearance={ 'ghost' }>Кнопка</Button>


            <P size={ 's' } className={ 'test' }>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и
                ими можно успешно пользоваться
                дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в
                душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных
                местах.</P>

            <P>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться
                дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в
                душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных
                местах.</P>

            <P size={ 'l' }>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно
                пользоваться
                дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в
                душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных
                местах.</P>

            <Tag color={ 'red' } size={ 's' }>hh.ru</Tag>
            <Tag color={ 'red' } size={ 'm' }>hh.ru</Tag>
            <Tag color={ 'ghost' } size={ 's' }>hh.ru</Tag>
            <Tag color={ 'ghost' } size={ 'm' }>hh.ru</Tag>
            <Tag color={ 'gray' } size={ 's' }>hh.ru</Tag>
            <Tag color={ 'gray' } size={ 'm' }>hh.ru</Tag>
            <Tag color={ 'green' } size={ 's' }>hh.ru</Tag>
            <Tag color={ 'green' } size={ 'm' } href={ '/hello' }>hh.ru</Tag>
            <Tag color={ 'primary' } size={ 's' }>hh.ru</Tag>
            <Tag color={ 'primary' } size={ 'm' }>hh.ru</Tag>
        </>
    )
}

export default Home