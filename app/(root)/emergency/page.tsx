const getData = async () => {
  const res = await fetch(
    `https://opendata.hccg.gov.tw/API/v3/Rest/OpenData/1F91157DE4066E06?take=10&skip=0`,
    { cache: 'force-cache' },
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function Page() {
  return <div>Page</div>
}

export default Page
