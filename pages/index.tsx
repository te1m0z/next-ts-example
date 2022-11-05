import React                            from 'react'
import { Button, Htag, P, Rating, Tag } from '../components'
import { RatingCount }                  from '../components/Rating/Rating.props'

const Home = () => {

    const [ rating, setRating ] = React.useState<RatingCount>( 4 )

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

            <Rating rating={ rating } isEditable={ true } setRating={ setRating } />
        </>
    )
}

export default Home