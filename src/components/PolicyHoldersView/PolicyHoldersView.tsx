import { getJSON, postJSON } from '../../backend/api' 
import InfoTable from '../InfoTable'
import routes from '../../constants/backend'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { Button, Box } from '@mui/material';
import { PolicyHolder, PolicyHolderResponse } from './types'

const getNewPolicyHolder = () : PolicyHolder => ({
  name: 'Ryann Chandler',
  age: 36,
  address: {
    line1: '123 ABC Street',
    line2: 'Suite 1',
    city: 'Nashville',
    state: 'Tn',
    postalCode: '37013'
  },
  phoneNumber: '615-867-5309',
  isPrimary: false
})

const PolicyHoldersView = () => {
  const queryClient = useQueryClient();
  const query = useQuery<PolicyHolderResponse>('policyHolders', () => getJSON<PolicyHolderResponse>(routes.policyHolders));
  const mutation = useMutation(
    (newPolicyHolder: PolicyHolder) => postJSON<PolicyHolderResponse>(routes.policyHolders, newPolicyHolder),
    {
      onSuccess: (data) => {
        queryClient.setQueryData('policyHolders', data)
      }
    })

  if (query.isLoading || mutation.isLoading) return <div>...Loading</div>;
  if (query.error || mutation.isError) return <div>...error</div>;

  const { policyHolders } = queryClient.getQueryData<PolicyHolderResponse>('policyHolders') as PolicyHolderResponse;
  
  const tables = policyHolders.map((policyHolder: PolicyHolder) => ([
    {key: 'Name', value: policyHolder.name},
    {key: 'Age', value: policyHolder.age},
    {key: 'Address', value: `${policyHolder.address.line1} ${policyHolder.address.line2}, ${policyHolder.address.city} ${policyHolder.address.state}, ${policyHolder.address.postalCode}`},
    {key: 'Phone Number', value: policyHolder.phoneNumber},
    {key: 'Is Primary', value: policyHolder.isPrimary ? 'Yes' : 'No'}
  ]));

  return (
    <Box
      sx={{
        justifyItems: 'center',
        display: 'grid'
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gap: '40px'
        }}
      >
        {tables.map((rows, idx) => <InfoTable key={`${idx}_table`} header={`Policy Holder ${idx+1}`} rows={rows} /> )}
      </Box>
      
      <Button 
        sx={{
          marginTop: '20px'
        }}
        onClick={() => mutation.mutate(getNewPolicyHolder())}
        variant="contained"
        color="primary"
        size="large"
        disabled={tables.length > 1}
      >
        Add a policyholder
      </Button>
    </Box>
  )
}

export default PolicyHoldersView
