import CMS from "netlify-cms-app";
import { pl } from "netlify-cms-locales";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import OfferPagePreview from "./preview-templates/OfferPagePreview";
import RealizationPostPreview from "./preview-templates/RealizationPostPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
CMS.registerLocale("pl", pl);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("offer", OfferPagePreview);
CMS.registerPreviewTemplate("posts", RealizationPostPreview);
