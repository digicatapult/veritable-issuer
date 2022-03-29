import ContentWrap from '../../../ContentWrap'

export default function ContentSelector({
  children,
  status,
  origin,
  persona,
  connections,
}) {
  return (
    <>
      {children && children}
      {!children && status !== 'fetched' && (
        <div className="py-4 my-4">&nbsp;</div>
      )}
      {!children && status === 'fetched' && (
        <ContentWrap
          origin={origin}
          persona={persona}
          connections={connections}
        />
      )}
    </>
  )
}
