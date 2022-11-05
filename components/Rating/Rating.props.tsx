import { DetailedHTMLProps, HTMLAttributes } from 'react'

export enum RatingCount {
    One   = 1,
    Two   = 2,
    Three = 3,
    Four  = 4,
    Five  = 5
}

export const checkIsRating = ( int: number ): RatingCount | false => {
    if (int in RatingCount) {
        return int
    }
    return false
}

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean,
    rating: RatingCount,
    setRating?: ( rating: RatingCount ) => void
}