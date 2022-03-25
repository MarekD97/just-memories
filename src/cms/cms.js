import CMS from 'netlify-cms-app'
import { pl } from 'netlify-cms-locales';
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
CMS.registerLocale('pl', pl);

CMS.registerPreviewTemplate('index', IndexPagePreview)
