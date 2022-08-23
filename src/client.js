import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'n9mlzgii',
    dataset:'production',
    apiVersion:'2021-10-21',
    useCdn:true,
    token: 'skxR58P6PCY0MmmpldPNvNaQ8GREgtCDXMIdVfZe7tv7uXH26Mzmo9EaRPEfEVkyALM90ss6WCxBSnboYP20lx9iQF8BwmsoYuT5SP2tq4p4Qbop6eXDPGfb6tP7GwC9anHDNSJ7RmJMvaplm19IqFOUZsyGa9A2wtYPry0lnlHkCro8Lnmk'
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)