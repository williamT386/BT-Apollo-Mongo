import { gql } from 'apollo-server';

// TODO: Fill in 
export const getFields = `
    
`;

export const createFields = `
`;

export const updateFields = `
`;

export default gql`
    type User {
        ${getFields}
    }

    type Query {
        users: [User]
        userById(id: ID!): User
    }

    type Mutation {
        createUser(${createFields}): User
        updateUser(${updateFields}): User
    }
`;
