// styled button component

import styled from "styled-components"

// remember to export

export const ButtonContainer= styled.button`
text-transform: capitalize
font-size:1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
color:${props=>props.cart?"var(--mainYellow)": "var(--lightBlue)"};
border-radius: .5rem;
border-color: ${props=>props.cart?"var(--mainYellow)": "var(--lightBlue)"};
padding: .2rem .5rem;
cusror: pointer;
margin: .2rem .5rem .2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props=>props.cart?"var(--mainYellow)": "var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus{
    outline: none;
}
`

// in cases where props are passed::
// we are checking if the button container used anywhere in the app has a props called cart passed, if it has we change the respective properties to mainYellow, if not they remain as lightBlue