import React, { Component } from 'react'
import Loading from '../components/Loading'

const withLoading = (propName) => (WrappedComponent) => {
  return class ComponentWithLoading extends Component {
    render() {
      return this.props[propName].length === 0 ? <Loading /> : <WrappedComponent {...this.props} />
    }
  }
}

export default withLoading
