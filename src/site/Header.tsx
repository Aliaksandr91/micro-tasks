import React from 'react';

type HeaderType={
    titleHeader: string
}
export const Header = (props:HeaderType) => {
    return (
        <div>{props.titleHeader}</div>
    )
}