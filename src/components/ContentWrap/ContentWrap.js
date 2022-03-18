import ColumnLeftWrap from '../ColumnLeft/ColumnLeftWrap'
import ColumnRightWrap from '../ColumnRight/ColumnRightWrap'

export default function ContentWrap({ origin, persona }) {
  return (
    <>
      <ColumnLeftWrap origin={origin} persona={persona} />
      <ColumnRightWrap origin={origin} />
    </>
  )
}
