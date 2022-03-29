import ColumnLeftWrap from '../ColumnLeft/ColumnLeftWrap'
import ColumnRightWrap from '../ColumnRight/ColumnRightWrap'

export default function ContentWrap({ origin, persona, connections }) {
  return (
    <>
      <ColumnLeftWrap
        origin={origin}
        persona={persona}
        connections={connections}
      />
      <ColumnRightWrap origin={origin} />
    </>
  )
}
