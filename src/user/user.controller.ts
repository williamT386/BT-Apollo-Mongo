import { ApolloError } from 'apollo-server';
import { parseDatabaseErrors } from '../database';
import UserModel from './user.model';

export async function users(_, __, { organizationId }) {
}

export async function userById(_, { id }, { organizationId }) {
}

export async function createUser(_, create, { organizationId }) {
}

export async function updateUser(_, update, { organizationId }) {
}
