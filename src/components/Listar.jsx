import React, { Component } from 'react'
import Card from './Card'
import styled from "styled-components";

const DivMgT = styled.div`
  margin: 20px;
  padding: 0;
  justify-content: center;
  align-items: center;
`

export default class Listar extends Component {

    constructor(){
        super()
        this.state={
            ofertasLaborales : []
        }
    }

    async componentDidMount(){
        const url = "https://tiendapao.herokuapp.com/trabajos"
        const resp = await fetch (url)
        const data = await resp.json()
        // console.log(data)
        this.setState({ofertasLaborales:data})
    }


  render() {

    return (
      <DivMgT>
          
          {
              this.state.ofertasLaborales.map((oferta)=>(
                <Card key={oferta.id}
                ofertaProps = {oferta}
                />
              ))
          }
         
      </DivMgT>
    )
  }
}
