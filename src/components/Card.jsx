import React, { Component } from 'react'
import styled from "styled-components";

const DivPrincipal = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
const UlFlex = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  margin-left: 10px;
`
const PCeleste = styled.p`
  color: #69BFB7;
  font-weight: 600;
  gap: 30px;
`;
const DivFlex = styled.div`
  display: flex;
  background-color: white;
  height:150px;
  border: none;
  width: 80%;
  margin: 30px auto;
  border-radius:5px;
  border-left: 5px solid #5DA5A5;
  justify-content:space-between;
  align-items: center;
`
const LiCursor = styled.li`
  cursor: pointer;
`

export default class Card extends Component {
  render() {
    const {id, empresa, imagen, publicacion, ubicacion, cargo, modalidad, palabrasClaves}=this.props.ofertaProps
    let [a, b, c, d, e, f, g, h = ""] = palabrasClaves 
    // let palabra = palabrasClaves.map((palabra, index)=>(
    //   <li key={index}>{palabra}</li>
      
    return (
      <DivFlex>
      <DivPrincipal>
        <div key={id}></div>
          <div><img width="100px" src={imagen} alt="" /></div>
        <div>
          <div>
          <PCeleste>{empresa}</PCeleste>
          </div>
        <h2>{cargo}</h2>
        <p>{publicacion} <span>•</span> {modalidad} <span>•</span> {ubicacion}</p>
        </div>
        </DivPrincipal>
        <div>
          <UlFlex>
            <LiCursor>{a}</LiCursor>
            <LiCursor>{b}</LiCursor>
            <LiCursor>{c}</LiCursor>
            <LiCursor>{d}</LiCursor>
            <LiCursor>{e}</LiCursor>
            <LiCursor>{f}</LiCursor>
            <LiCursor>{g}</LiCursor>
          </UlFlex>
        </div>
        </DivFlex>
    )
  }
}
