import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Container } from 'semantic-ui-react'
// import { Provider } from 'react-redux'
// import store from './store'
import RetailStore from './RetailStore.react'
// import Search from './Search'
// import Details from './Details'
import storeItems from '../public/item-data.json'
import '../public/semantic.min.css'
import '../public/normalize.css'
import '../public/style.scss'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <Container text>
          <Match exactly pattern='/' component={(props) => {
            const items = storeItems.CatalogEntryView || []
            return <RetailStore {...props} storeItems={items} />
          }} />
        </Container>
        {/* </Provider> */}
      </BrowserRouter>
    )
  }
})

// <Match
//  pattern='/search'
//  component={(props) => <Search shows={preload.shows} {...props} />}
// />
// <Match
//  pattern='/details/:id'
//  component={(props) => {
//    const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
//    return <Details show={shows[0]} {...props} />
//  }}
// />

render(<App />, document.getElementById('app'))
