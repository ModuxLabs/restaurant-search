type FormatterFunc<RawData, FormattedData> = (rawData: RawData) => FormattedData

export default function<RawData, FormattedData> (transformFunc: FormatterFunc<RawData, FormattedData>) {
  return (res: Response) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<FormattedData>(async (resolve, reject) => {
      try {
        if (!res.ok) throw new Error((await res.json())?.message)
        resolve(transformFunc(await res.json()))
      } catch (err) {
        reject(err)
      }
    })
  }
}
