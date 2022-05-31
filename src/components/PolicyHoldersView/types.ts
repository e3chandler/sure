export type PolicyHolder = {
  name: string,
  age: number,
  address: {
    line1: string,
    line2: string,
    city: string,
    state: string,
    postalCode: string
  },
  phoneNumber: string,
  isPrimary: boolean
};

export type PolicyHolderResponse = {
  policyHolders: PolicyHolder[]
}
