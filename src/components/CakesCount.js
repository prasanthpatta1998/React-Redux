import React from 'react'
import { buycake } from '../Features/Cake/CakeActions'
import { connect } from 'react-redux'

const CakesCount = (props) => {
  return (
    <div>
        <h3>Number Of Cakes -{props.numOfCakes}</h3>
        <button onClick={() => props.buycake()}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buycake:() => dispatch(buycake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakesCount)