'use strict';

/**
 * pokemon router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pokemon.pokemon');
