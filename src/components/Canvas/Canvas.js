import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './Canvas.css'

import canvasActions from '../../actions/canvasActions';

/** 
 * class Canvas
 * @Desc:  This component will be our hook into using d3 to create our structure.
 * This component is not allowed to update as we do not want to have our shadow dom
 * overwrite any state D3 contains once it is bound. Before we tell d3 to do anything
 * within, this component needs to understand which tool is currently selected and
 * update the structure accordingly. We will use a lib file to keep our tool logic. 
 * In our canvas state (in Redux) we need to be able to keep track of nodes in our 
 * structure which are actively selected.
 */
export class Canvas extends Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired
  }
  constructor (props) {
    super(props)
    this.d3Node = React.createRef()
  }

  componentDidUpdate () {

  }
  componentWillMount () {

  }

  render() {
    return (
      <svg
        ref={this.d3Node}
        width={500}
        height={500}
      />
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
