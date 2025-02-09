import S from '@sanity/desk-tool/structure-builder';
import client from 'part:@sanity/base/client';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { BsInfoSquare } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';

const { dataset } = client.config();

const mainTitle = dataset === 'epoxypro' ? 'Toronto Epoxy Pro' : 'The City Painters';

export default () =>
  S.list()
    .title(mainTitle)
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Company Info')
        .icon(BsInfoSquare)
        .child(
          S.list()
            .title('Company Info')
            .items([
              S.listItem()
                .title('Contact Info')
                .icon(MdBusiness)
                .child(S.document().schemaType('companyInfo').documentId('companyInfo')),
              S.documentTypeListItem('socialInfo').title('Social Info'),
              S.documentTypeListItem('companyLogo').title('Company Logos'),
            ]),
        ),
      S.listItem()
        .title('Website')
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title('Website')
            .items([
              S.documentTypeListItem('navMenu').title('Navigation'),
              S.documentTypeListItem('page').title('Structured Pages'),
              S.divider(),
              S.documentTypeListItem('guide').title('Guides'),
              S.documentTypeListItem('mpGuide').title('MP Guides'),
              S.documentTypeListItem('category').title('Guide Categories'),
            ]),
        ),
      S.documentTypeListItem('redirect').title('Redirects'),
      S.documentTypeListItem('person').title('People'),
    ]);
