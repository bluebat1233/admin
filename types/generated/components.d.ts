import type { Schema, Attribute } from '@strapi/strapi';

export interface ParagrafParagraf extends Schema.Component {
  collectionName: 'components_paragraf_paragrafs';
  info: {
    displayName: 'Paragraf';
    description: '';
  };
  attributes: {
    paragraph: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'paragraf.paragraf': ParagrafParagraf;
    }
  }
}
