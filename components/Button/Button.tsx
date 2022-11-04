import React           from 'react'
import styles          from './Button.module.css'
import { ButtonProps } from './Button.props'
import cn              from 'classnames'
import ArrowIcon       from './arrow.svg'

export const Button = ({ appearance, arrowDirection = 'none', children, ...props }: ButtonProps): JSX.Element => {

    return (
        <button
            className={ cn(styles.button, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]:   appearance === 'ghost'
            }) }
            { ...props }
        >
            { children }
            { arrowDirection !== 'none' && (
                <span className={ cn(styles.arrow, {
                    [styles.down]:  arrowDirection === 'down',
                    [styles.right]: arrowDirection === 'right',
                }) }>
                    <ArrowIcon />
                </span>
            ) }
        </button>
    )
}