import S from '@sanity/desk-tool/structure-builder'
import client from 'part:@sanity/base/client'
const { dataset} = client.config()

const mainTitle = dataset === 'epoxypro' ? 'Toronto Epoxy Pro' : 'The City Painters'

export default () =>
  S.list()
    .title(mainTitle)
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
            S.document()
              .schemaType('siteSettings')
              .documentId('siteSettings')
        ),
        S.listItem()
          .title('Company Info')
          .child(
            S.list()
              .title('Company Info')
              .items([
                S.listItem()
                  .title('Contact Info')
                  .child(
                    S.document()
                      .schemaType('companyInfo')
                      .documentId('companyInfo')
                  ), 
                S.documentTypeListItem('socialInfo').title('Social Info'),
                S.documentTypeListItem('companyLogo').title('Company Logos'),
              ])
          ),
      S.listItem()
        .title('Website')
        .child(
          S.list()
            .title('Website')
            .items([
              S.documentTypeListItem('navMenu').title('Navigation'),
              S.documentTypeListItem('page').title('Pages'),
              S.divider(),
              S.documentTypeListItem('guide').title('Guides'),
              S.documentTypeListItem('category').title('Guide Categories'),
            ])
        ),
      S.documentTypeListItem('person').title('People'),
    ])
