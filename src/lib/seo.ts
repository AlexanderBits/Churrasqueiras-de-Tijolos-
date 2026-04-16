export function getProductJsonLd(product: any) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images.map((img: any) => img.url),
    "description": product.metaDescription || product.description.replace(/<[^>]*>?/gm, ""),
    "brand": {
      "@type": "Brand",
      "name": "Churrasqueiras RJ"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://churrasqueirasrj.com.br/produto/${product.slug}`,
      "priceCurrency": "BRL",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };
}
