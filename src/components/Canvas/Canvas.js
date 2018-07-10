import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './Canvas.css'

import canvasActions from '../../actions/canvasActions';

export class Canvas extends Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired
  }

  render() {
    return (
      <div>
        <p>This is the canvas!</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators(canvasActions, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
