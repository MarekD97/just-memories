import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  data.intro.image = getAsset(data.intro.image);
  data.main.images = data.main.images.map(item => getAsset(item.image));
  data.footerImage = getAsset(data.footerImage);

  if (data) {
    return (
      <IndexPageTemplate
        intro={data.intro}
        main={data.main}
        footerImage={data.footerImage}
      />
      //   image={getAsset(data.image)}
      //   title={data.title}
      //   heading={data.heading}
      //   subheading={data.subheading}
      //   textAlign={data.textAlign}
      //   description={data.description}
      //   intro={data.intro || { blurbs: [] }}
      //   mainpitch={data.mainpitch || {}}
      // />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
