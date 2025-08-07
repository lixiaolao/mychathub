import { useAtom } from 'jotai'
import { FetchError } from 'ofetch'
import useSWR from 'swr'
import { licenseKeyAtom } from '~app/state'
import { clearLicenseInstances, getLicenseInstanceId, validateLicenseKey } from '~services/premium'

export function usePremium() {
  const [licenseKey, setLicenseKey] = useAtom(licenseKeyAtom)

  const activateQuery = useSWR<{ valid: boolean }>(`license:${licenseKey}`, async () => ({ valid: true }), {
    revalidateOnFocus: false,
  })

  return {
    activated: activateQuery.data?.valid,
    isLoading: activateQuery.isLoading,
  }
}
