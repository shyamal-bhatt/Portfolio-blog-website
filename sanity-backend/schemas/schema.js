// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Import created schema
import blog from './schema_components/blog'
import profile from './schema_components/profile'
import socialhandles from './schema_components/socialhandles'
import skills from './schema_components/skills'
import projects from './schema_components/projects'


// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // concat imported objects here
    blog, 
    profile,
    socialhandles,
    skills,
    projects
  ]),
})
