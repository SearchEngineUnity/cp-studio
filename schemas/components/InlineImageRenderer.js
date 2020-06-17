import React from 'react'
import PropTypes from 'prop-types'
import client from 'part:@sanity/base/client'
const { projectId, dataset } = client.config()

const InlineImageRenderer = props => {

    if (props.asset && props.children) {
        const image = props.asset._ref.replace(/image-/, '').replace(/\-(?![\s\S]*\-)/, '\.')
        const imageCdn = `https://cdn.sanity.io/images/${projectId}/${dataset}/`
    
        return (
            <span>
                <img src={`${imageCdn}${image}`} style={{width: '100%', height: 'auto'}}></img>
                <span>Alt text: {props.children}</span>

            </span>
        )
    } else if (props.children) {
        return <span>Alt text: {props.children}</span>
    } else {
        return null
    }

}

InlineImageRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  asset: PropTypes.isRequired
}

export default InlineImageRenderer
