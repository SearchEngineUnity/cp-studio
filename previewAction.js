//need to set up prview_url based on env veriables...

export function PreviewAction(props) { 

    const PREVIEW_URL = ''
    const draft = props.draft ? true : false
    const published = props.published ? true : false

    let slug = ''

    if (props.type === 'page' || props.type === 'guide'){
        if (draft) {
            if (props.draft.slug) {
                slug = props.draft.slug.current === "/" ? '/': props.draft.slug.current
            }    
        } else if (published){
            if (props.published.slug){
                slug = props.published.slug.current === "/" ? '/': props.published.slug.current
            } 
        }
    }

    if (props.type === 'page') {
        return {
            label: 'Preview',
            onHandle: () => {
                // Here you can perform your actions
                window.open(`${PREVIEW_URL}/${slug}`, "_blank")
            }
        }   
    } else if (props.type === 'guide') {
        return {
            label: 'Preview',
            onHandle: () => {
                window.open(`${PREVIEW_URL}/guide/${slug}`, "_blank")
            }
        }
    }

    return null

  }