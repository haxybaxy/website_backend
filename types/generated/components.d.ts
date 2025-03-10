import type { Schema, Struct } from '@strapi/strapi';

export interface SharedJsonRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_json_rich_texts';
  info: {
    displayName: 'JsonRichText';
    icon: 'write';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'picture';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.json-rich-text': SharedJsonRichText;
      'shared.media': SharedMedia;
    }
  }
}
