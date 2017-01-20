import React from 'react'
import sanitize from 'sanitize-html'
import ItemDetailsReviews from './ItemDetailsReviews.react'
import { Grid, Header, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
const { object, func } = React.PropTypes

class ItemDetails extends React.Component {
  render () {
    const storeItem = this.props.storeItem || {}
    return (
      <div>
        <Grid stackable relaxed columns={2}>
          <Grid.Column>
            <Header as='h3' textAlign='center'>
              { storeItem.title }
            </Header>
            <Image src={storeItem.Images[0].PrimaryImage[0].image} />
          </Grid.Column>
          <Grid.Column>
            <Header as='h2'>
              {storeItem.Offers[0].OfferPrice[0].formattedPriceValue}
            </Header>
            <Header as='h2'>
              product highlights
            </Header>
            <ul>
              {
                storeItem.ItemDescription[0].features.map((highlight, index) => {
                  return (
                    <li key={index}>
                      <span
                        dangerouslySetInnerHTML={{__html: sanitize(highlight)}}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </Grid.Column>
        </Grid>
        <ItemDetailsReviews
          customerReview={storeItem.CustomerReview[0]}
        />
      </div>
    )
  }
}

ItemDetails.propTypes = {
  storeItem: object,
  dispatch: func
}

function mapStateToProps (state, ownProps) {
  return {
    cartItem: state.cartItem
  }
}

export default connect(mapStateToProps)(ItemDetails)
