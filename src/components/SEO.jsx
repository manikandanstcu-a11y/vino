import { useEffect } from 'react';

/**
 * SEO helper to update page title and description dynamically per route.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    // Update document title
    const fullTitle = title 
      ? `${title} | Vino Mehendi Arts Dindigul` 
      : 'Vino Mehendi Arts | Best Bridal Mehendi Artist in Dindigul, Tamil Nadu';
    document.title = fullTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        description ||
          'Vino Mehendi Arts in Dindigul offers bespoke bridal mehendi, engagement henna, baby shower, and festive designs with 100% organic henna and doorstep service.'
      );
    }
  }, [title, description]);

  return null;
}
