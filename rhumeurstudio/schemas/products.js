/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'products',
    title: 'Best Sellers',
    type: 'document',
    __experimental_actions: ['update', 'publish', 'create'],
    fields: [
        {
            name: 'name',
            title: 'Recette',
            type: 'string',
            description: 'Nom de la recette',
            validation: Rule => Rule.required()
        },
        {
            name: 'picture',
            title: 'Photo',
            type: 'image',
            description: 'Formats(PNG, JPEG, SVG, WEBP',
            options: {
                accept: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
            },
            validation: Rule => Rule.required()

        },
        {
            name: 'alt',
            title: 'Légende',
            description: '(Important pour le SEO)',
            type: 'string',
            validation: Rule => Rule.required()

        },
        {
            name: 'resume',
            title: 'Description',
            description: 'Description de la recette (maximum de 10 lignes)',
            type: 'text',
            validation: Rule => Rule.required()
        }
    ]
}