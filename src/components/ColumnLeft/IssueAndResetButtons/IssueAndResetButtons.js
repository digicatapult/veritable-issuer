/**
 * This function is used to display the buttons for issuing and resetting the
 * credential
 */

export default function IssueAndResetButtons({
  onActivatedReset,
  onActivatedSubmit,
  selectedSchemaId,
  selectedCredDefId,
  selectedId,
  selectedTitle,
  selectedName,
  selectedSubtitle,
  selectedSurname,
  selectedExpiration,
  selectedType,
  statusIssueCred,
}) {
  const isDisabledForm = () => {
    let isDisabled = false
    isDisabled = isDisabled || selectedId === ''
    isDisabled = isDisabled || selectedTitle === ''
    isDisabled = isDisabled || selectedName === ''
    isDisabled = isDisabled || selectedSubtitle === ''
    isDisabled = isDisabled || selectedSurname === ''
    isDisabled = isDisabled || selectedExpiration === ''
    isDisabled = isDisabled || selectedType === ''
    return isDisabled
  }
  const submitHandler = (e) => {
    e.preventDefault()
    onActivatedSubmit()
    onActivatedReset()
  }
  const resetHandler = (e) => {
    e.preventDefault()
    onActivatedReset()
  }
  return (
    <>
      <div className="col-md-5">
        <button
          type="submit"
          className="btn btn-primary w-100"
          onClick={submitHandler}
          disabled={
            selectedSchemaId === '' ||
            selectedCredDefId === '' ||
            isDisabledForm()
          }
        >
          {statusIssueCred === 'fetching' && (
            <>
              <i className="fa fa-spinner fa-pulse"></i>
            </>
          )}
          &nbsp; Issue &nbsp;
        </button>
      </div>
      <div className="col-md-1">&nbsp;</div>
      <div className="col-md-1">&nbsp;</div>
      <div className="col-md-5">
        <button
          type="submit"
          className="btn btn-secondary bg-danger text-white w-100"
          onClick={resetHandler}
        >
          &nbsp;Reset&nbsp;
        </button>
      </div>
    </>
  )
}
