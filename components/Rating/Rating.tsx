import React, { KeyboardEvent }                    from 'react'
import { checkIsRating, RatingCount, RatingProps } from './Rating.props'
import styles                                      from './Rating.module.css'
import cn                                          from 'classnames'
import StarIcon                                    from './star.svg'

export const Rating = ( { isEditable = false, rating, setRating, ...props }: RatingProps ): JSX.Element => {

    const [ ratingArray, setRatingArray ] = React.useState<JSX.Element[]>( new Array( 5 ).fill( <></> ) )

    const constructRating = ( currentRating: RatingCount | number ) => {

        const updatedArray = ratingArray.map( ( item: JSX.Element, indx: number ) => {
            return (
                <StarIcon
                    className={ cn( styles.star, {
                        [styles.filled]:   indx < currentRating,
                        [styles.editable]: isEditable
                    } ) }
                    onMouseEnter={ () => checkIsRating( indx + 1 ) ? changeDisplay( indx + 1 ) : null }
                    onMouseLeave={ () => changeDisplay( rating ) }
                    onClick={ () => checkIsRating( indx + 1 ) ? ratingHandler( indx + 1 ) : null }
                    tabIndex={ isEditable ? 0 : -1 }
                    onKeyDown={ ( e: KeyboardEvent<SVGElement> ) => isEditable && !!checkIsRating( indx + 1 ) && handleSpace( indx + 1, e ) }
                />
            )
        } )

        setRatingArray( updatedArray )
    }

    const changeDisplay = ( ratingIndex: number ): void => {
        if (!isEditable) return
        constructRating( ratingIndex )
    }

    const ratingHandler = ( ratingIndex: RatingCount ) => {
        if (!isEditable || !setRating) return
        setRating( ratingIndex )
    }

    const handleSpace = ( ratingIndex: RatingCount, e: KeyboardEvent<SVGElement> ) => {
        if (e.code !== 'Space' || !setRating) return
        setRating( ratingIndex )
    }

    React.useEffect( () => {
        constructRating( rating )
    }, [ rating ] )

    return (
        <div className={ styles.rating } { ...props } >
            { ratingArray.map( ( item: JSX.Element, indx: number ) => <span key={indx}>{item}</span> ) }
        </div>
    )
}