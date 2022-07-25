import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'nqjkb6qr',
    dataset: 'production',
    apiVersion: '2022-05-01',
    useCdn: true,
    token: 'sk9jnk4HHriR8GeD437uPMfV41Jq61yuKT0KHBHU4nzCc1a7ybbJ15DsI4LfK6bEB8xY0ohAuG11KxJ9clfJdNaxM2KChUcPrjBCdShxeMo6aymeQM8VAVPju4YuLw6iuFVl0Cx98EsajgVbuAduUe1W9JtpsjWZWAx7sFUD5fUYdSJPhSyB'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);