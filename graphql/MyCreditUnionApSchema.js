import { gql } from 'apollo-server';

-resolver
const sampleCreditUnions = [
  {
    id: "1",
    Contract_Number: "123456",
    Credit_Union_Name: "ABC Credit Union",
    Premium_Reports: [],
    Premium_Adjustments: [],
    Single_Premium_Certificate_Returns: []
  }
];

const resolvers = {
  Query: {
    getCreditUnion: (_, { id }) => sampleCreditUnions.find(cu => cu.id === id),
    getPremiumReport: () => null,  // Placeholder
    getPremiumAdjustment: () => null,  // Placeholder
    getSinglePremiumCertificateReturn: () => null  // Placeholder
  },
  Mutation: {
    createCreditUnion: (_, { input }) => {
      const newCreditUnion = { ...input, Premium_Reports: [], Premium_Adjustments: [], Single_Premium_Certificate_Returns: [] };
      sampleCreditUnions.push(newCreditUnion);
      return newCreditUnion;
    },
    createPremiumReport: (_, { input }) => input,  // Placeholder
    createPremiumAdjustment: (_, { input }) => input,  // Placeholder
    createSinglePremiumCertificateReturn: (_, { input }) => input  // Placeholder
  }
};
//

export default typeDefs;