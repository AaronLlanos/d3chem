import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './DrawPalette.css'

import paletteActions from '../../actions/paletteActions';

export class DrawPalette extends Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired
  }

  render() {
    return (
      <div>
        <p>This is the palette!</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators(paletteActions, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawPalette)
