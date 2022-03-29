import ColumnLeftWrap from '../ColumnLeft/ColumnLeftWrap'
import ColumnRightWrap from '../ColumnRight/ColumnRightWrap'

export default function ContentWrap({ origin, connections }) {
  return (
    <>
      <ColumnLeftWrap origin={origin} connections={connections} />
      <ColumnRightWrap origin={origin} />
    </>
  )
}
