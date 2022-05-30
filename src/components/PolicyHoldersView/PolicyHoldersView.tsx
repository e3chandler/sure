import { getJSON } from '../../backend/api' 
import InfoTable from '../InfoTable'
import routes from '../../constants/backend'
import { useQuery } from 'react-query'

type PolicyHolder = {
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

const PolicyHoldersView = () => {
  const { isLoading, error, data } = useQuery('policyHolders', () => getJSON(routes.policyHolders));

  if (isLoading) return <div>...Loading</div>;
  if (error) return <div>...error</div>;

  const { policyHolders } = data
  const rows = policyHolders.flatMap((policyHolder: PolicyHolder) => ([
    {key: 'Name', value: policyHolder.name},
    {key: 'Age', value: policyHolder.age},
    {key: 'Address', value: `${policyHolder.address.line1} ${policyHolder.address.line2}, ${policyHolder.address.city} ${policyHolder.address.state} ${policyHolder.address.postalCode}`},
    {key: 'Phone Number', value: policyHolder.phoneNumber},
    {key: 'Is Primary', value: policyHolder.isPrimary ? 'Yes' : 'No'}
  ]));

  return <InfoTable header="Policy Holders" rows={rows} />
}

export default PolicyHoldersView



// Name
// Age
// Address
// Phone number
// Primary policyholder?