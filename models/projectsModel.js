const imagesProject = [
    { id: 123123, imageURL: 'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1604593042837-6GY50U84DMA06VIVW4BP/WCKM-0564.jpg?format=750w' }, 
    { id: 123234, imageURL: 'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1604593064545-LA26MFZJ52EZ76EQ1P6W/WCKM-0560.jpg' },
    { id: 123345, imageURL: 'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1555388710371-3H3HHF31X20Q6LN8KDRX/WCKM-4-2.jpg?format=750w' },
    { id: 123456, imageURL: 'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1555388779811-2IPB8FL2DVYOXQH9HGAG/WCKM-4.jpg?format=2500w' },
    { id: 123567, imageURL: 'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1556597199650-BMJVREXZ7TZY2OT3HENO/WCKM-2584.jpg?format=2500w'},
    { id: 123678, imageURL: 'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1555388670850-335M3F06Z8460G9PZZCQ/WCKM-1-2.jpg?format=1500w' }
]

module.exports = {
    getAll,
};

function getAll() {
        return imagesProject;
    }

