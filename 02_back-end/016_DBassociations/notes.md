# Associations

> Allows to have multiple pieces of data (collections) that are related to one another.

## Embed data
 * Embed data, the full data.

## Associate data
 * Associate only IDs, like foreign keys.

## Module.Exports
 * <b>Allow us to break things into files</b>
    * Move our models into separate files
    * Clean up code and make more modular <br>
    * Make things reusable, <b>I can have another file that requires specific models</b>
    * Steps: <br>
       1. Create models directory
       2. Use module.exports
       3. Require everything correctly
