'use strict';

/**
 * pokemon controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pokemon.pokemon');
