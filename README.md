```graphql
const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Reports: [Premium_Report]
    Premium_Adjustments: [Premium_Adjustment]
    Single_Premium_Certificate_Returns: [Single_Premium_Certificate_Return]
  }

  type Premium_Report {
    id: ID!
    Premium_Reports: [Premium_Report]
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
    Premium_Adjustments: [Premium_Adjustment]
  }

  type Single_Premium_Certificate_Return {
    id: ID!
    Single_Premium_Certificate_Returns: [Single_Premium_Certificate_Return]
  }

  input Credit_UnionInput {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
  }

  input Premium_ReportInput {
    id: ID!
  }

  input Premium_AdjustmentInput {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input Single_Premium_Certificate_ReturnInput {
    id: ID!
  }

  type Query {
    getCreditUnion(id: ID!): Credit_Union
    getPremiumReport(id: ID!): Premium_Report
    getPremiumAdjustment(id: ID!): Premium_Adjustment
    getSinglePremiumCertificateReturn(id: ID!): Single_Premium_Certificate_Return
  }

  type Mutation {
    createCreditUnion(input: Credit_UnionInput): Credit_Union
    createPremiumReport(input: Premium_ReportInput): Premium_Report
    createPremiumAdjustment(input: Premium_AdjustmentInput): Premium_Adjustment
    createSinglePremiumCertificateReturn(input: Single_Premium_Certificate_ReturnInput): Single_Premium_Certificate_Return
  }
`;
```

```javascript
// codegen-start-resolver
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
// codegen-end-resolver
```