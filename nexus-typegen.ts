/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  card: { // root type
    answer: string; // String!
    id: number; // Int!
    question: string; // String!
  }
  user: { // root type
    email: string; // String!
    id: number; // Int!
    names: string; // String!
    password: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createCard: NexusGenRootTypes['card']; // card!
    createUser: NexusGenRootTypes['user']; // user!
    deleteCard: string; // String!
    updateCard: NexusGenRootTypes['card']; // card!
  }
  Query: { // field return type
    getCards: NexusGenRootTypes['card'][]; // [card!]!
    getOneCard: NexusGenRootTypes['card']; // card!
    getOneUser: NexusGenRootTypes['user']; // user!
    getUsers: NexusGenRootTypes['user'][]; // [user!]!
  }
  card: { // field return type
    answer: string; // String!
    id: number; // Int!
    question: string; // String!
  }
  user: { // field return type
    cards: NexusGenRootTypes['card'][]; // [card!]!
    email: string; // String!
    id: number; // Int!
    names: string; // String!
    password: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createCard: 'card'
    createUser: 'user'
    deleteCard: 'String'
    updateCard: 'card'
  }
  Query: { // field return type name
    getCards: 'card'
    getOneCard: 'card'
    getOneUser: 'user'
    getUsers: 'user'
  }
  card: { // field return type name
    answer: 'String'
    id: 'Int'
    question: 'String'
  }
  user: { // field return type name
    cards: 'card'
    email: 'String'
    id: 'Int'
    names: 'String'
    password: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCard: { // args
      answer: string; // String!
      question: string; // String!
    }
    createUser: { // args
      email: string; // String!
      names: string; // String!
      password: string; // String!
    }
    deleteCard: { // args
      id: number; // Int!
    }
    updateCard: { // args
      answer: string; // String!
      id: number; // Int!
      question: string; // String!
    }
  }
  Query: {
    getOneCard: { // args
      id: number; // Int!
    }
    getOneUser: { // args
      email: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}