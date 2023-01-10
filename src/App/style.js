import styled from 'styled-components'
import {Check} from '@styled-icons/entypo/Check'
export const Conteiner=styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding-left: 80px;
padding-right: 40px;
`
export const First=styled.div`
background-color: #e3d9bc;
height: 100vh;


`
export const Detail=styled.div`
background-color: white;
position: relative;
color: white;
display: flex;
flex-direction: row;
align-content: center;
align-items: center;
height: 60px;
margin-top:15px;
box-sizing: border-box;
padding-left: 10px;

`
export const Button1=styled.button`
position: absolute;
margin-left: 94%;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
width: 20px;
height: 20px;
background-color: white;
cursor: pointer;
border: 1px solid green;
color: green;
border-radius: 2px;
`
export const Button2=styled.button`
position: absolute;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
width: 20px;
height: 20px;
background-color: white;
cursor: pointer;
border: 1px solid red;
color: red;
margin-left: 96%;
border-radius: 2px;

`
export const List=styled.h1`
display: flex;
align-items: center;
align-content: center;
justify-content: center;
`
export const Input=styled.input`
height: 30px;
box-sizing: border-box;
margin-top: 5px;
border: 1px black solid;
outline: none;
border-radius: 4px;
`
export const Head=styled.h2`
color: black;
`
export const Button3=styled.button`
width: 80px;
height: 30px;
margin-top: 15px;
margin-bottom: 10px;
color: white;
background-color: blue;
cursor: pointer;
border-radius: 4px;
border: none;
`
export const Icon=styled.div``

Icon.Chek=styled(Check)`
color: green;
width: 20px;
height: 20px;
box-sizing: border-box;
`