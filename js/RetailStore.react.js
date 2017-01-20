import React from 'react'
const { arrayOf, object } = React.PropTypes

export default class RetailStore extends React.Component {
  render () {
    return (
      <div>
        this is a test
      </div>
    )
  }
}

RetailStore.propTypes = {
  storeItems: arrayOf(object)
}
